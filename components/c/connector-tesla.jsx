import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8b54lbtn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8b54lbtn"/>`,
		"fallback": "roentgen:connector-tesla",
	});
}

export default Component;
