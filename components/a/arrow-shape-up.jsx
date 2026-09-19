import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr5_v4qbg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gr5_v4qbg"/>`,
		"fallback": "gravity-ui:arrow-shape-up",
	});
}

export default Component;
