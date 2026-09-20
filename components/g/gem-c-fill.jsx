import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcn0yvbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcn0yvbub"/>`,
		"fallback": "mage:gem-c-fill",
	});
}

export default Component;
