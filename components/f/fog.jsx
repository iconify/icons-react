import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr7vsjalr.css';
import '../../css/s/s0goipb0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr7vsjalr"/><rect class="s0goipb0f"/>`,
		"fallback": "carbon:fog",
	});
}

export default Component;
