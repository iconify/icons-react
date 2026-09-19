import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia_fujtsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia_fujtsn"/>`,
		"fallback": "grommet-icons:forward-ten",
	});
}

export default Component;
