import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi21tmbyq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi21tmbyq"/>`,
		"fallback": "streamline:airport-plane-remix",
	});
}

export default Component;
