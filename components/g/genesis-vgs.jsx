import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf_i46_pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf_i46_pe"/>`,
		"fallback": "cbi:genesis-vgs",
	});
}

export default Component;
