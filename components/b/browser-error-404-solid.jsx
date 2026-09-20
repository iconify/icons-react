import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py1-74bei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="py1-74bei"/>`,
		"fallback": "streamline-sharp:browser-error-404-solid",
	});
}

export default Component;
