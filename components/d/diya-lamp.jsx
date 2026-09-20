import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq80vsb8f.css';
import '../../css/g/g9kdv_asi.css';
import '../../css/r/rxarm1gqe.css';
import '../../css/b/b31870eua.css';
import '../../css/f/f92tnizue.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/n/nl1fejbda.css';
import '../../css/c/ct3r9qbus.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq80vsb8f"/><path class="g9kdv_asi"/><path class="rxarm1gqe"/><path class="b31870eua"/><path class="f92tnizue"/><g class="rpvb-o6bq"><path class="nl1fejbda"/><path class="ct3r9qbus"/></g>`,
		"fallback": "openmoji:diya-lamp",
	});
}

export default Component;
