import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tci_6ibss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tci_6ibss"/>`,
		"fallback": "gg:album",
	});
}

export default Component;
