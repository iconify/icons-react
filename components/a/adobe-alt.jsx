import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m49f24b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m49f24b7x"/>`,
		"fallback": "uit:adobe-alt",
	});
}

export default Component;
