import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htw7-ymao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="htw7-ymao"/>`,
		"fallback": "keyline-icons:circle-align-offset-top-sharp-fill",
	});
}

export default Component;
