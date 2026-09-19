import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc_q9jbdu.css';
import '../../css/c/c5p8reb_m.css';
import '../../css/z/zzxe0-1un.css';
import '../../css/h/h84axl_8p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc_q9jbdu"/><path class="c5p8reb_m"/><path class="zzxe0-1un"/><path class="h84axl_8p"/>`,
		"fallback": "devicon:djangorest",
	});
}

export default Component;
