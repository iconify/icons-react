import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe7nswuwc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe7nswuwc"/>`,
		"fallback": "jam:dices",
	});
}

export default Component;
