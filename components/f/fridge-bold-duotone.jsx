import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjk5al0qp.css';
import '../../css/u/u3fekhbnn.css';
import '../../css/h/hvm7gjbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vjk5al0qp"/><path class="u3fekhbnn"/><path class="hvm7gjbqj"/>`,
		"fallback": "solar:fridge-bold-duotone",
	});
}

export default Component;
