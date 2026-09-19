import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_auzoz_p.css';
import '../../css/a/a4u_2wblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_auzoz_p"/><path class="a4u_2wblu"/>`,
		"fallback": "bx:crop",
	});
}

export default Component;
