import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noygarn3o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noygarn3o"/>`,
		"fallback": "teenyicons:git-solid",
	});
}

export default Component;
