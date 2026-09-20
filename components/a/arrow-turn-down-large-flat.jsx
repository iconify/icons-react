import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5ry4ve3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z5ry4ve3f"/>`,
		"fallback": "streamline-sharp-color:arrow-turn-down-large-flat",
	});
}

export default Component;
