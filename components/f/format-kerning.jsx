import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjpy1hcup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjpy1hcup"/>`,
		"fallback": "mdi:format-kerning",
	});
}

export default Component;
