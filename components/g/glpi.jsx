import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7e_i_bny.css';
import '../../css/w/wrnah39si.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7e_i_bny"/><path class="wrnah39si"/>`,
		"fallback": "selfhst:glpi",
	});
}

export default Component;
