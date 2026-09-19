import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j850wac-i.css';
import '../../css/n/n56_8z4jg.css';
import '../../css/o/ofkbvnbsv.css';
import '../../css/z/z6z3uibua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="j850wac-i"/><path class="n56_8z4jg"/><circle class="ofkbvnbsv"/><circle class="z6z3uibua"/></g>`,
		"fallback": "icon-park-outline:engineering-vehicle",
	});
}

export default Component;
