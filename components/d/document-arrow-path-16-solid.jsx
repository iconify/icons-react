import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_dvcp49q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_dvcp49q"/>`,
		"fallback": "sidekickicons:document-arrow-path-16-solid",
	});
}

export default Component;
