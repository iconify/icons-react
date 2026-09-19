import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kwm3l1baj.css';
import '../../css/d/dzhnytx5f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kwm3l1baj"/><path class="dzhnytx5f"/></g>`,
		"fallback": "fluent-emoji-flat:crossed-fingers-light",
	});
}

export default Component;
