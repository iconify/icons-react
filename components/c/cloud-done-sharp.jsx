import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmaaj5vii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmaaj5vii"/>`,
		"fallback": "ion:cloud-done-sharp",
	});
}

export default Component;
