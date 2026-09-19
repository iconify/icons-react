import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk7r_jbtw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk7r_jbtw"/>`,
		"fallback": "dinkie-icons:adult",
	});
}

export default Component;
