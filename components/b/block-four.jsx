import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyk46-7ha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyk46-7ha"/>`,
		"fallback": "icon-park-solid:block-four",
	});
}

export default Component;
