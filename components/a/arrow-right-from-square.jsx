import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0f7br4-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f0f7br4-a"/>`,
		"fallback": "gravity-ui:arrow-right-from-square",
	});
}

export default Component;
