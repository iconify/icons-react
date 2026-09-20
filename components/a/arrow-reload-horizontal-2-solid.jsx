import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqvo3ybzi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jqvo3ybzi"/>`,
		"fallback": "streamline:arrow-reload-horizontal-2-solid",
	});
}

export default Component;
