import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebs0_ubnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebs0_ubnb"/>`,
		"fallback": "noviair-light:helicopter",
	});
}

export default Component;
