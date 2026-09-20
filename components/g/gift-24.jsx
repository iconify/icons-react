import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tftyg4b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tftyg4b2k"/>`,
		"fallback": "qlementine-icons:gift-24",
	});
}

export default Component;
