import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct1ofye1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="ct1ofye1k"/>`,
		"fallback": "wordpress:at-symbol",
	});
}

export default Component;
