import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3uu5lbtk.css';
import '../../css/o/omkgw9bsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3uu5lbtk"/><path class="omkgw9bsc"/>`,
		"fallback": "boxicons:alien",
	});
}

export default Component;
