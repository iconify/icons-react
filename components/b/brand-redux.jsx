import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f4-beubnc.css';
import '../../css/w/wzsp4oxrh.css';
import '../../css/q/qomvzkabu.css';
import '../../css/w/waq84pbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f4-beubnc"/><path class="wzsp4oxrh"/><path class="qomvzkabu"/><path class="waq84pbkn"/></g>`,
		"fallback": "tabler:brand-redux",
	});
}

export default Component;
