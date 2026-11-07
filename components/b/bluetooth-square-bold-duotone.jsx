import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_frcb-c.css';
import '../../css/i/i_cgi-t8l.css';
import '../../css/h/hj4ovvz1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_frcb-c"/><path class="i_cgi-t8l"/><path clip-rule="evenodd" class="hj4ovvz1k"/>`,
		"fallback": "solar:bluetooth-square-bold-duotone",
	});
}

export default Component;
