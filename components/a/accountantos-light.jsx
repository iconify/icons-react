import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enqd_6bdd.css';

const viewBox = {"width":1084,"height":1074};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enqd_6bdd"/>`,
		"fallback": "thesvg-color:accountantos-light",
	});
}

export default Component;
