import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2tbqbb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2tbqbb3p"/>`,
		"fallback": "streamline-ultimate:human-resources-hierarchy-1",
	});
}

export default Component;
