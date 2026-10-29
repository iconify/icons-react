import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgehlxb8p.css';
import '../../css/b/bdn4j9fmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgehlxb8p"/><path class="bdn4j9fmc"/>`,
		"fallback": "withicons-bauhaus:chevron-down",
	});
}

export default Component;
