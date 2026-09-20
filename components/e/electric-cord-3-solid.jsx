import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x72ag7b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x72ag7b7a"/>`,
		"fallback": "streamline-sharp:electric-cord-3-solid",
	});
}

export default Component;
