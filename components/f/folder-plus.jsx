import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nog_us2ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nog_us2ey"/>`,
		"fallback": "prime:folder-plus",
	});
}

export default Component;
