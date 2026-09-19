import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us9dlyptw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us9dlyptw"/>`,
		"fallback": "griddy-icons:beaker-empty-filled",
	});
}

export default Component;
