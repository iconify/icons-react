import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptvb_sb5v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptvb_sb5v"/>`,
		"fallback": "energy-icons:cloud-drizzle-20",
	});
}

export default Component;
