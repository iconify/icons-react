import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv6_41bpb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv6_41bpb"/>`,
		"fallback": "dinkie-icons:clapper-board",
	});
}

export default Component;
