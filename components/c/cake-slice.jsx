import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzci_0zyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzci_0zyo"/>`,
		"fallback": "vadivam:cake-slice",
	});
}

export default Component;
