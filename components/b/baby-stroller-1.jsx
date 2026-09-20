import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-jig1b9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-jig1b9a"/>`,
		"fallback": "streamline-cyber:baby-stroller-1",
	});
}

export default Component;
