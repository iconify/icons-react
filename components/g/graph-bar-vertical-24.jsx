import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr4n_ac6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr4n_ac6s"/>`,
		"fallback": "octicon:graph-bar-vertical-24",
	});
}

export default Component;
