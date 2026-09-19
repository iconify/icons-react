import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh823tkng.css';

const viewBox = {"width":77,"height":729};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh823tkng"/>`,
		"fallback": "ls:exclam",
	});
}

export default Component;
