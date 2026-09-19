import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/temd_8bxi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="temd_8bxi"/>`,
		"fallback": "gravity-ui:arrow-up",
	});
}

export default Component;
