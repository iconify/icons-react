import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa3crb1kv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa3crb1kv"/>`,
		"fallback": "rivet-icons:bus",
	});
}

export default Component;
