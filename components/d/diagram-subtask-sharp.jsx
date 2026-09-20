import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2itfyboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2itfyboc"/>`,
		"fallback": "keyline-icons:diagram-subtask-sharp",
	});
}

export default Component;
