import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jus2nxdev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jus2nxdev"/>`,
		"fallback": "griddy-icons:halloween-tomb",
	});
}

export default Component;
