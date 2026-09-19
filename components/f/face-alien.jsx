import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mji93bd3g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mji93bd3g"/>`,
		"fallback": "gravity-ui:face-alien",
	});
}

export default Component;
