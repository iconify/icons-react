import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sortblb2j.css';
import '../../css/w/w-5rgdbpk.css';
import '../../css/a/avwj5pu0c.css';
import '../../css/j/j74ghonra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sortblb2j wm-k"/><path class="w-5rgdbpk wm-a"/><path class="avwj5pu0c wm-k"/><path class="j74ghonra wm-a"/></g>`,
		"fallback": "withicons:case-upper-sketch",
	});
}

export default Component;
