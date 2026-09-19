import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx7oyrbof.css';
import '../../css/m/mb0x8lb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dx7oyrbof"/><path class="mb0x8lb-v"/>`,
		"fallback": "bitcoin-icons:info-filled",
	});
}

export default Component;
