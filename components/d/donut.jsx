import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g9qe22bnk.css';
import '../../css/z/zizwbwb-u.css';
import '../../css/e/ebnucmg7y.css';
import '../../css/a/aexuozm6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="g9qe22bnk wm-shadow"/><path class="wm-shadow zizwbwb-u"/><path class="ebnucmg7y"/><path class="aexuozm6v"/></g>`,
		"fallback": "withicons-brutal:donut",
	});
}

export default Component;
