import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx2s8s6gg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fx2s8s6gg"/>`,
		"fallback": "gravity-ui:arrow-chevron-left",
	});
}

export default Component;
