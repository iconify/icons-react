import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqjcqq0dr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z89jkdb_z.css';
import '../../css/j/jqjybu5du.css';
import '../../css/r/rqhxtipmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqjcqq0dr secondary"/><g class="dt0cm9dhy primary"><path class="z89jkdb_z"/><path class="jqjybu5du"/><path class="rqhxtipmw"/></g>`,
		"fallback": "iconaut:input-cursor-duo",
	});
}

export default Component;
