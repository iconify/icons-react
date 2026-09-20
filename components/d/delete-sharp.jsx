import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob5rnnpdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob5rnnpdj"/>`,
		"fallback": "keyline-icons:delete-sharp",
	});
}

export default Component;
