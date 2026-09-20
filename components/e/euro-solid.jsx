import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogh1vxbqa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ogh1vxbqa"/>`,
		"fallback": "teenyicons:euro-solid",
	});
}

export default Component;
