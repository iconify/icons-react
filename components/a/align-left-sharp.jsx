import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8idp9_5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8idp9_5i"/>`,
		"fallback": "keyline-icons:align-left-sharp",
	});
}

export default Component;
