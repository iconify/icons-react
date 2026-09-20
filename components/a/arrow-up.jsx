import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/metg5eb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="metg5eb8l"/>`,
		"fallback": "reicon:arrow-up",
	});
}

export default Component;
