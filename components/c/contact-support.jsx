import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exleob20c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="exleob20c"/>`,
		"fallback": "healthicons:contact-support",
	});
}

export default Component;
