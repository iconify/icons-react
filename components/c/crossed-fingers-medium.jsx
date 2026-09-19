import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rio62_2fs.css';
import '../../css/l/lfsagabkj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rio62_2fs"/><path class="lfsagabkj"/></g>`,
		"fallback": "fluent-emoji-flat:crossed-fingers-medium",
	});
}

export default Component;
