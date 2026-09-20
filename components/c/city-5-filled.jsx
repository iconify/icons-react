import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi_0iv7qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi_0iv7qi"/>`,
		"fallback": "tdesign:city-5-filled",
	});
}

export default Component;
