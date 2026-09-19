import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt8_mpb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt8_mpb1v"/>`,
		"fallback": "grommet-icons:docker",
	});
}

export default Component;
