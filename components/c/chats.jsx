import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljbt1k0jq.css';
import '../../css/a/ag3j1zb_c.css';
import '../../css/i/i5nh8nifr.css';
import '../../css/q/qurxc7b-j.css';
import '../../css/m/mho7osb0z.css';
import '../../css/q/qlsbzj3nc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljbt1k0jq"/><path class="ag3j1zb_c"/><path class="i5nh8nifr"/><circle class="qurxc7b-j"/><circle class="mho7osb0z"/><circle class="qlsbzj3nc"/>`,
		"fallback": "openmoji:chats",
	});
}

export default Component;
