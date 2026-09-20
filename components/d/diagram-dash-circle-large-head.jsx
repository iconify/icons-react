import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovp4tye2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovp4tye2f"/>`,
		"fallback": "streamline-ultimate:diagram-dash-circle-large-head",
	});
}

export default Component;
