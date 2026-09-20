import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz4b266xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz4b266xd"/>`,
		"fallback": "tabler:cloud-exclamation",
	});
}

export default Component;
