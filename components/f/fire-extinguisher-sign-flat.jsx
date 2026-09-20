import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a02antp3a.css';
import '../../css/c/cant2cbbp.css';
import '../../css/m/m4t_r_bbn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a02antp3a"/><path clip-rule="evenodd" class="cant2cbbp"/><path class="m4t_r_bbn"/></g>`,
		"fallback": "streamline-color:fire-extinguisher-sign-flat",
	});
}

export default Component;
