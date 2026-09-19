import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a57li6b2p.css';
import '../../css/a/a_tlqyzpa.css';
import '../../css/m/m2tanfswk.css';
import '../../css/a/axn3j1_ix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a57li6b2p"/><path class="a_tlqyzpa"/><path class="m2tanfswk"/><path class="axn3j1_ix"/>`,
		"fallback": "fxemoji:closedmailboxraised",
	});
}

export default Component;
