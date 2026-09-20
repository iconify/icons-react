import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/p/pi7jdd7uf.css';
import '../../css/e/ez5131brf.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="pi7jdd7uf"/><path class="ez5131brf"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-st-vincent-and-grenadines",
	});
}

export default Component;
