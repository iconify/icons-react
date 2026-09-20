import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dukpz28sm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dukpz28sm"/>`,
		"fallback": "tdesign:document-popular-filled",
	});
}

export default Component;
