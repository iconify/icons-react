import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rok2wacqg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rok2wacqg"/>`,
		"fallback": "heroicons:bars-3-bottom-right-20-solid",
	});
}

export default Component;
