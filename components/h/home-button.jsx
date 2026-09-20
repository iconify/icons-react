import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyjt3db7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect vector-effect="non-scaling-stroke" class="oyjt3db7r"/>`,
		"fallback": "wordpress:home-button",
	});
}

export default Component;
