import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eiogu7bxw.css';
import '../../css/h/htne1cc9u.css';
import '../../css/m/m30ddqb9f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eiogu7bxw"/><path class="htne1cc9u"/><path class="m30ddqb9f"/></g>`,
		"fallback": "streamline-color:box-sign",
	});
}

export default Component;
