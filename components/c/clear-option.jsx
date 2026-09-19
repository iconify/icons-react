import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyk4ir-7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyk4ir-7x"/>`,
		"fallback": "grommet-icons:clear-option",
	});
}

export default Component;
