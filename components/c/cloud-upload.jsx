import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5bwxtbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5bwxtbbe"/>`,
		"fallback": "grommet-icons:cloud-upload",
	});
}

export default Component;
