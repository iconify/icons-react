import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgolb5zaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgolb5zaa"/>`,
		"fallback": "keyline-icons:git-merge",
	});
}

export default Component;
