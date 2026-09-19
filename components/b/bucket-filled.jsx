import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw2gtd80r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw2gtd80r"/>`,
		"fallback": "boxicons:bucket-filled",
	});
}

export default Component;
