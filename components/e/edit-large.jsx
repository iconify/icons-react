import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njkt2bj_n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njkt2bj_n"/>`,
		"fallback": "dashicons:edit-large",
	});
}

export default Component;
