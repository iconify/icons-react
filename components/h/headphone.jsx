import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9q3epq1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9q3epq1r"/>`,
		"fallback": "streamline-cyber:headphone",
	});
}

export default Component;
