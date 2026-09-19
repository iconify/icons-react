import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6mgh21rq.css';
import '../../css/i/i1bwvyb5w.css';
import '../../css/z/z_6yhtb_m.css';
import '../../css/g/g8ojlubuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6mgh21rq"/><circle class="i1bwvyb5w"/><circle class="z_6yhtb_m"/><path class="g8ojlubuv"/>`,
		"fallback": "circum:hard-drive",
	});
}

export default Component;
