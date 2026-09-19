import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzqprsbbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzqprsbbe"/>`,
		"fallback": "icon-park-solid:clothes-briefs",
	});
}

export default Component;
