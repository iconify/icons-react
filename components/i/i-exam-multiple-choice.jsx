import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b35q_0bvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b35q_0bvf"/>`,
		"fallback": "healthicons:i-exam-multiple-choice",
	});
}

export default Component;
