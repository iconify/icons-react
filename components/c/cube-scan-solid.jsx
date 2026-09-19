import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsgvmwn9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nsgvmwn9w"/>`,
		"fallback": "iconoir:cube-scan-solid",
	});
}

export default Component;
