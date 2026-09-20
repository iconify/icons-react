import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccnu6m9vh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ccnu6m9vh"/>`,
		"fallback": "streamline:dna-solid",
	});
}

export default Component;
