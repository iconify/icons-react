import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlqqbzuhn.css';
import '../../css/b/b_4q_nb6f.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlqqbzuhn"/><path class="b_4q_nb6f"/>`,
		"fallback": "iwwa:danger",
	});
}

export default Component;
