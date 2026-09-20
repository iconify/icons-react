import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2bokcczi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2bokcczi"/>`,
		"fallback": "keyline-icons:eye-sharp",
	});
}

export default Component;
