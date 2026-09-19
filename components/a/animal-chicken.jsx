import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxhtjnb5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wxhtjnb5t"/>`,
		"fallback": "healthicons:animal-chicken",
	});
}

export default Component;
