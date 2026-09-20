import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt2f7cbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gt2f7cbvw"/>`,
		"fallback": "si:error-fill",
	});
}

export default Component;
