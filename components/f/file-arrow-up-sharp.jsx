import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0ycukbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0ycukbtn"/>`,
		"fallback": "keyline-icons:file-arrow-up-sharp",
	});
}

export default Component;
