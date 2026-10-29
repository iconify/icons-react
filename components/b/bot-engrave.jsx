import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gckae0brv.css';
import '../../css/b/bnrd1xfao.css';
import '../../css/r/r17wey2jw.css';
import '../../css/s/ss-bu_bnf.css';
import '../../css/i/i64xizi4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gckae0brv wm-k"/><path class="bnrd1xfao wm-a"/><path class="r17wey2jw wm-shadow"/><path class="ss-bu_bnf wm-k"/><path class="i64xizi4g wm-a"/></g>`,
		"fallback": "withicons:bot-engrave",
	});
}

export default Component;
