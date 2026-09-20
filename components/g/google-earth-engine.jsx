import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn1te-lst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn1te-lst"/>`,
		"fallback": "thesvg-color:google-earth-engine",
	});
}

export default Component;
