import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsm8jabvs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsm8jabvs"/>`,
		"fallback": "rivet-icons:filter-solid",
	});
}

export default Component;
