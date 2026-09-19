import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt8sy1bpo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt8sy1bpo"/>`,
		"fallback": "codicon:chrome-restore",
	});
}

export default Component;
