import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8yv5ybdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8yv5ybdz"/>`,
		"fallback": "healthicons:health-data-security",
	});
}

export default Component;
