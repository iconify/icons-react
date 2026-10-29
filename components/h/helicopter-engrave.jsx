import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u77n4s6-n.css';
import '../../css/r/rpqxzacuc.css';
import '../../css/e/eeje0kknz.css';
import '../../css/b/bt7scxyyw.css';
import '../../css/u/ui38c_2aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u77n4s6-n wm-k"/><path class="rpqxzacuc wm-a"/><path class="eeje0kknz wm-shadow"/><path class="bt7scxyyw wm-k"/><path class="ui38c_2aq wm-a"/></g>`,
		"fallback": "withicons:helicopter-engrave",
	});
}

export default Component;
