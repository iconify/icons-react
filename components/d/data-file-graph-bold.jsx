import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mth0oeb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mth0oeb6p"/>`,
		"fallback": "streamline-ultimate:data-file-graph-bold",
	});
}

export default Component;
