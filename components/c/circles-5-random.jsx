import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy23x9ztz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uy23x9ztz"/>`,
		"fallback": "gravity-ui:circles-5-random",
	});
}

export default Component;
