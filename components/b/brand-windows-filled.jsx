import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2lv0vbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2lv0vbah"/>`,
		"fallback": "tabler:brand-windows-filled",
	});
}

export default Component;
