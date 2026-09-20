import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fipcg1rcz.css';
import '../../css/g/gtk4lacos.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fipcg1rcz"/><path class="gtk4lacos"/>`,
		"fallback": "material-icon-theme:eslint",
	});
}

export default Component;
