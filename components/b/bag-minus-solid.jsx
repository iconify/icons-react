import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvlhzvb1u.css';
import '../../css/n/ngozc736n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvlhzvb1u"/><path clip-rule="evenodd" class="ngozc736n"/>`,
		"fallback": "teenyicons:bag-minus-solid",
	});
}

export default Component;
