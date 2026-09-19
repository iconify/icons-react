import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1f2wrbyt.css';

const viewBox = {"width":488,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1f2wrbyt"/>`,
		"fallback": "fa-brands:google",
	});
}

export default Component;
