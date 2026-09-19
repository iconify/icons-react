import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du8w8acry.css';
import '../../css/d/derbi0b0z.css';
import '../../css/c/csr7k5b0k.css';
import '../../css/s/s6vp0zb_v.css';
import '../../css/h/hqqixg2zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du8w8acry"/><path class="derbi0b0z"/><path class="csr7k5b0k"/><path class="s6vp0zb_v"/><path class="hqqixg2zq"/>`,
		"fallback": "gcp:cloud-cdn",
	});
}

export default Component;
