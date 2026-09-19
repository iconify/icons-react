import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsfne-b7l.css';
import '../../css/z/z-gksw3iv.css';
import '../../css/c/crl6_3vrk.css';
import '../../css/e/et2ttgeah.css';
import '../../css/c/cybhvabkz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nsfne-b7l"><path class="z-gksw3iv"/><path class="crl6_3vrk"/><path class="et2ttgeah"/><path class="cybhvabkz"/></g>`,
		"fallback": "icon-park:balance-one",
	});
}

export default Component;
