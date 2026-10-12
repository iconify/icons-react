import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-uzhjbay.css';
import '../../css/e/e_4r487dh.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-uzhjbay"/><path class="e_4r487dh"/><path class="aqsnv9bnd"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:image-check-20-bold",
	});
}

export default Component;
