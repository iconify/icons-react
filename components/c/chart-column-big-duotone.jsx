import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6hb1eb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6hb1eb2s primary"/>`,
		"fallback": "iconaut:chart-column-big-duotone",
	});
}

export default Component;
