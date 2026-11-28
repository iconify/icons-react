import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to8wr5-fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary to8wr5-fc"/>`,
		"fallback": "iconaut:curtains-duotone",
	});
}

export default Component;
