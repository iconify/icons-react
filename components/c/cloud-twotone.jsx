import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgrtxyi6j.css';
import '../../css/d/dn6i_ub7n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgrtxyi6j"/><path class="dn6i_ub7n"/>`,
		"fallback": "ant-design:cloud-twotone",
	});
}

export default Component;
