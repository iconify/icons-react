import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tztz0x36v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tztz0x36v"/>`,
		"fallback": "vadivam:file-plus-corner",
	});
}

export default Component;
