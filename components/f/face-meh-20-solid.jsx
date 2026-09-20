import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c06y5ub8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c06y5ub8y"/>`,
		"fallback": "sidekickicons:face-meh-20-solid",
	});
}

export default Component;
