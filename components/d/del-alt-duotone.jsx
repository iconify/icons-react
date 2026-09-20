import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kazka8b2e.css';
import '../../css/b/b0insabyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="kazka8b2e"/><path clip-rule="evenodd" class="b0insabyx"/>`,
		"fallback": "lets-icons:del-alt-duotone",
	});
}

export default Component;
