import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0gqsvhhg.css';
import '../../css/e/egk9jea5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0gqsvhhg"/><path clip-rule="evenodd" class="egk9jea5i"/>`,
		"fallback": "solar:bookmark-x-outline",
	});
}

export default Component;
