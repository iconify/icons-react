import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl5y3kb8c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xl5y3kb8c"/>`,
		"fallback": "streamline:business-profession-home-office-remix",
	});
}

export default Component;
