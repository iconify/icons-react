import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv7fg-bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv7fg-bkv"/>`,
		"fallback": "thesvg-color:google-photos",
	});
}

export default Component;
