import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzhlp3bxm.css';
import '../../css/w/wgaj_ib1j.css';
import '../../css/s/s07htpbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzhlp3bxm"/><path class="wgaj_ib1j"/><path class="s07htpbtb"/>`,
		"fallback": "boxicons:bullseye-filled",
	});
}

export default Component;
