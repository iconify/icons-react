import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbw0r8mbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbw0r8mbr"/>`,
		"fallback": "feather:bar-chart",
	});
}

export default Component;
