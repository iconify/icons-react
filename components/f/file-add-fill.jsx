import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo7wm5voy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zo7wm5voy"/>`,
		"fallback": "iconamoon:file-add-fill",
	});
}

export default Component;
