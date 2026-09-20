import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aj3s01fkv.css';
import '../../css/g/g8iul5-0e.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="aj3s01fkv"/><path class="g8iul5-0e"/></g>`,
		"fallback": "skill-icons:audition",
	});
}

export default Component;
