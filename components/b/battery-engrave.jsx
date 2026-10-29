import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fpcuoqb7g.css';
import '../../css/v/v7npj_bxk.css';
import '../../css/x/xmzujebsj.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/i/i913gobhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fpcuoqb7g wm-k"/><path class="v7npj_bxk wm-a"/><path class="wm-shadow xmzujebsj"/><path class="nn2sdrbun wm-k"/><path class="i913gobhf wm-a"/></g>`,
		"fallback": "withicons:battery-engrave",
	});
}

export default Component;
