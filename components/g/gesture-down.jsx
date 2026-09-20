import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7s21bb5i.css';
import '../../css/v/vs5uf_thp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f7s21bb5i"/><path class="vs5uf_thp"/></g>`,
		"fallback": "tdesign:gesture-down",
	});
}

export default Component;
