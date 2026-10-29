import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/az496hjvu.css';
import '../../css/z/zi6tnccid.css';
import '../../css/v/vzibu2b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="az496hjvu"/><path class="zi6tnccid"/><path class="vzibu2b_i"/></g>`,
		"fallback": "withicons:git-pull-request-sketch",
	});
}

export default Component;
