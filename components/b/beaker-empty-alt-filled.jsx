import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz_2cui9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz_2cui9o"/>`,
		"fallback": "griddy-icons:beaker-empty-alt-filled",
	});
}

export default Component;
