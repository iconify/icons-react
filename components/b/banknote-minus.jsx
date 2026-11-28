import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf_g46bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf_g46bxt"/>`,
		"fallback": "noviair:banknote-minus",
	});
}

export default Component;
