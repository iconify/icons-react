import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bkbgjrbao.css';
import '../../css/k/k6rstmvnk.css';
import '../../css/h/hhj58fbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bkbgjrbao"/><path class="k6rstmvnk"/><path class="hhj58fbib"/></g>`,
		"fallback": "iconoir:fingerprint-lock-circle",
	});
}

export default Component;
