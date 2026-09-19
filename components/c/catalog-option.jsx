import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4lpm3r4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4lpm3r4t"/>`,
		"fallback": "grommet-icons:catalog-option",
	});
}

export default Component;
