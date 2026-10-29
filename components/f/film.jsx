import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/r/r3aqt0b9e.css';
import '../../css/i/ifozc1efu.css';
import '../../css/n/ntgtefb8j.css';
import '../../css/e/esqdrgnmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="r3aqt0b9e"/><path class="ifozc1efu"/><path class="ntgtefb8j"/><path class="esqdrgnmu wm-deco"/></g>`,
		"fallback": "withicons-sticker:film",
	});
}

export default Component;
