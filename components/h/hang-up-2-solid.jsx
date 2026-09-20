import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdew_8bek.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bdew_8bek"/>`,
		"fallback": "streamline:hang-up-2-solid",
	});
}

export default Component;
