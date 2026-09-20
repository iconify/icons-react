import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndoljcctl.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndoljcctl"/>`,
		"fallback": "thesvg-color:base-ui-light",
	});
}

export default Component;
