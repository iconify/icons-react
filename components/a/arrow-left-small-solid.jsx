import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_3xcqb6y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_3xcqb6y"/>`,
		"fallback": "teenyicons:arrow-left-small-solid",
	});
}

export default Component;
