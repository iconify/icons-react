import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5y09czkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5y09czkr"/>`,
		"fallback": "file-icons:devcontainer",
	});
}

export default Component;
