import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx_19xfxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="nx_19xfxn"/>`,
		"fallback": "wordpress:buttons",
	});
}

export default Component;
