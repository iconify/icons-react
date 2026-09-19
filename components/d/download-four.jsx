import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mtr8gtysq.css';
import '../../css/x/x9_-dnb2u.css';
import '../../css/x/xg20wgnod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path clip-rule="evenodd" class="mtr8gtysq"/><path class="x9_-dnb2u"/><path class="xg20wgnod"/></g>`,
		"fallback": "icon-park:download-four",
	});
}

export default Component;
