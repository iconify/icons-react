import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1zalobua.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z1zalobua"/>`,
		"fallback": "codicon:debug-disconnect-compact",
	});
}

export default Component;
