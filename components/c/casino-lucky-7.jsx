import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct4qxub9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct4qxub9t"/>`,
		"fallback": "streamline-ultimate:casino-lucky-7",
	});
}

export default Component;
