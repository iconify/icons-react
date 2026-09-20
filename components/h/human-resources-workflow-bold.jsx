import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw2n-_wlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw2n-_wlj"/>`,
		"fallback": "streamline-ultimate:human-resources-workflow-bold",
	});
}

export default Component;
