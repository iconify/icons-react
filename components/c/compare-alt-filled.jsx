import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anuis4b4o.css';
import '../../css/q/q3g9f9bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="anuis4b4o b"/><path class="b q3g9f9bmy"/>`,
		"fallback": "boxicons:compare-alt-filled",
	});
}

export default Component;
