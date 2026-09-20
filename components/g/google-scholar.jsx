import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd9vnhbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd9vnhbkw"/>`,
		"fallback": "thesvg-color:google-scholar",
	});
}

export default Component;
