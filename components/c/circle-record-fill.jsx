import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej2aikqgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ej2aikqgh"/>`,
		"fallback": "keyline-icons:circle-record-fill",
	});
}

export default Component;
