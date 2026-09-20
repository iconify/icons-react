import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zee_p2c7i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zee_p2c7i"/>`,
		"fallback": "lsicon:education-filled",
	});
}

export default Component;
