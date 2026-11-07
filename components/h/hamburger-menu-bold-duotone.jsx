import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/e/eaqdpdd8a.css';
import '../../css/w/w1dl0yq1m.css';
import '../../css/p/pbvw0j5wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="eaqdpdd8a"/><path class="w1dl0yq1m"/><path class="pbvw0j5wl"/>`,
		"fallback": "solar:hamburger-menu-bold-duotone",
	});
}

export default Component;
