import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-ho668zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-ho668zi"/>`,
		"fallback": "keyline-icons:circle-dashed-check-sharp",
	});
}

export default Component;
