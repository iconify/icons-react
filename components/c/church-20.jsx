import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqx77rc_z.css';
import '../../css/z/zw6txi54r.css';
import '../../css/s/s_br_rypg.css';
import '../../css/u/uinh09d-z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqx77rc_z"/><path class="zw6txi54r"/><path class="s_br_rypg"/><path class="uinh09d-z"/>`,
		"fallback": "energy-icons:church-20",
	});
}

export default Component;
