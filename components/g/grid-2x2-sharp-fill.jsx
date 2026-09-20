import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r629fq0ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r629fq0ky"/>`,
		"fallback": "keyline-icons:grid-2x2-sharp-fill",
	});
}

export default Component;
