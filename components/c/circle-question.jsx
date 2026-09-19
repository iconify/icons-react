import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st6lq75ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st6lq75ns"/>`,
		"fallback": "grommet-icons:circle-question",
	});
}

export default Component;
