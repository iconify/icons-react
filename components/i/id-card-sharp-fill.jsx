import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk32t904i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yk32t904i"/>`,
		"fallback": "keyline-icons:id-card-sharp-fill",
	});
}

export default Component;
