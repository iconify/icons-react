import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucdqj-bas.css';
import '../../css/m/m3g3pfn4y.css';
import '../../css/m/m2qxt-bpd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucdqj-bas"/><path class="m3g3pfn4y"/><path class="m2qxt-bpd"/>`,
		"fallback": "energy-icons:images-20",
	});
}

export default Component;
