import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhd73iz3o.css';
import '../../css/f/fjk7q33ni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhd73iz3o"/><path class="fjk7q33ni"/>`,
		"fallback": "selfhst:heyform-dark",
	});
}

export default Component;
