import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok68s2t7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ok68s2t7p"/>`,
		"fallback": "si:clock-fill",
	});
}

export default Component;
