import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz0ue25cv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zz0ue25cv"/>`,
		"fallback": "gravity-ui:briefcase-fill",
	});
}

export default Component;
