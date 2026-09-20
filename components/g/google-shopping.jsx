import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-fvxvbsq.css';
import '../../css/f/fdzbfobsz.css';
import '../../css/y/yjd8i8vse.css';
import '../../css/w/wdhz7d8hl.css';
import '../../css/n/n_g3robjn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-fvxvbsq"/><path class="fdzbfobsz"/><path class="yjd8i8vse"/><path class="wdhz7d8hl"/><path class="n_g3robjn"/>`,
		"fallback": "selfhst:google-shopping",
	});
}

export default Component;
