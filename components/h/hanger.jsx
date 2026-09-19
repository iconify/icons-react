import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k20krjj8w.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k20krjj8w"/>`,
		"fallback": "whh:hanger",
	});
}

export default Component;
