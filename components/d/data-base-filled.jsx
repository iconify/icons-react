import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx4vzkb0x.css';
import '../../css/p/p3id4ob0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx4vzkb0x"/><path class="p3id4ob0g"/>`,
		"fallback": "tdesign:data-base-filled",
	});
}

export default Component;
