import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci6-fubhr.css';
import '../../css/i/igu9q_b-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ci6-fubhr"/><path class="igu9q_b-r"/>`,
		"fallback": "selfhst:8mb-local",
	});
}

export default Component;
