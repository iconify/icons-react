import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay7qukx1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay7qukx1a"/>`,
		"fallback": "tdesign:city-12-filled",
	});
}

export default Component;
