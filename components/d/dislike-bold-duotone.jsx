import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo0q5ob3i.css';
import '../../css/v/vj8wfhhvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo0q5ob3i"/><path clip-rule="evenodd" class="vj8wfhhvy"/>`,
		"fallback": "solar:dislike-bold-duotone",
	});
}

export default Component;
