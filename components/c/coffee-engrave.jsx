import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zuwpiec5r.css';
import '../../css/a/a5vht7b5e.css';
import '../../css/l/l1trulqsp.css';
import '../../css/o/o7ull5bnt.css';
import '../../css/g/g9g2iobxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zuwpiec5r"/><path class="a5vht7b5e wm-a"/><path class="l1trulqsp wm-shadow"/><path class="o7ull5bnt wm-k"/><path class="g9g2iobxb wm-a"/></g>`,
		"fallback": "withicons:coffee-engrave",
	});
}

export default Component;
