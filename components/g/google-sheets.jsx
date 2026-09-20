import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lews4bcdz.css';
import '../../css/r/rwgs81nbw.css';
import '../../css/o/ogdz0h5td.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lews4bcdz"/><path class="rwgs81nbw"/><path class="ogdz0h5td"/>`,
		"fallback": "selfhst:google-sheets",
	});
}

export default Component;
