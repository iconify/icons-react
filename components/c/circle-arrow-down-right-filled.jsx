import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buk670bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buk670bam"/>`,
		"fallback": "tabler:circle-arrow-down-right-filled",
	});
}

export default Component;
