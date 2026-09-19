import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp65h5bgo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp65h5bgo"/>`,
		"fallback": "codicon:cloud-upload",
	});
}

export default Component;
