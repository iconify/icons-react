import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn16o9_6z.css';
import '../../css/j/jsf9fd5pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn16o9_6z"/><path clip-rule="evenodd" class="jsf9fd5pm"/>`,
		"fallback": "lineicons:bike",
	});
}

export default Component;
