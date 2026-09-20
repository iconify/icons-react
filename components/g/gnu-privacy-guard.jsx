import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr1hukzzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr1hukzzb"/>`,
		"fallback": "thesvg-color:gnu-privacy-guard",
	});
}

export default Component;
