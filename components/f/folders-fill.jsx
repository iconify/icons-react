import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie1qbx9oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie1qbx9oa"/>`,
		"fallback": "ri:folders-fill",
	});
}

export default Component;
