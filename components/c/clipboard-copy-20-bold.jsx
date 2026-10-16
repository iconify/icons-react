import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6t120hgc.css';
import '../../css/b/b-cut7-tv.css';
import '../../css/i/iqqj1-bco.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6t120hgc"/><path class="b-cut7-tv"/><path class="iqqj1-bco"/>`,
		"fallback": "energy-icons:clipboard-copy-20-bold",
	});
}

export default Component;
