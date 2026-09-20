import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi4ef7btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi4ef7btx"/>`,
		"fallback": "simple-icons:fsharp",
	});
}

export default Component;
