import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gna6b-1ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gna6b-1ep"/>`,
		"fallback": "griddy-icons:carbon-dioxide",
	});
}

export default Component;
