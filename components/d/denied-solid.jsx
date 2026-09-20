import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci77r-bhk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ci77r-bhk"/>`,
		"fallback": "teenyicons:denied-solid",
	});
}

export default Component;
