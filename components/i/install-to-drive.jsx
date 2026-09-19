import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kugk6f76b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kugk6f76b"/>`,
		"fallback": "fluent-mdl2:install-to-drive",
	});
}

export default Component;
