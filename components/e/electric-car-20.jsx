import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr7_wabhq.css';
import '../../css/r/r3nawdb_c.css';
import '../../css/y/yl6jnvtmc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr7_wabhq"/><path class="r3nawdb_c"/><path class="yl6jnvtmc"/>`,
		"fallback": "energy-icons:electric-car-20",
	});
}

export default Component;
