import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aod6y7ztn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aod6y7ztn"/>`,
		"fallback": "heroicons:arrow-up-on-square-20-solid",
	});
}

export default Component;
