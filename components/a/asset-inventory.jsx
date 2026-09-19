import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4zkg1rsf.css';
import '../../css/e/eglypf0vu.css';
import '../../css/o/o6ihie1hh.css';
import '../../css/p/pye4v2rbu.css';
import '../../css/n/ngm3cbbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4zkg1rsf"/><path class="eglypf0vu"/><path class="o6ihie1hh"/><path class="pye4v2rbu"/><path class="ngm3cbbat"/>`,
		"fallback": "gcp:asset-inventory",
	});
}

export default Component;
