import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0_e6cbmq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0_e6cbmq"/>`,
		"fallback": "garden:check-circle-fill-20",
	});
}

export default Component;
