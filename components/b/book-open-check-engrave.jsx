import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dwuaxabbb.css';
import '../../css/p/pk03-9beu.css';
import '../../css/z/z_02kkxdd.css';
import '../../css/u/uh6a78blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dwuaxabbb wm-k"/><path class="pk03-9beu wm-shadow"/><path class="wm-k z_02kkxdd"/><path class="uh6a78blk wm-a"/></g>`,
		"fallback": "withicons:book-open-check-engrave",
	});
}

export default Component;
