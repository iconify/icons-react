import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jul4siskq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jul4siskq"/>`,
		"fallback": "gravity-ui:ghost",
	});
}

export default Component;
