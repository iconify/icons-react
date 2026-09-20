import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rccc1p87j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rccc1p87j"/>`,
		"fallback": "mdi:fruit-cherries",
	});
}

export default Component;
