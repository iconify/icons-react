import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk2hbr6ot.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk2hbr6ot"/>`,
		"fallback": "devicon-plain:embeddedc",
	});
}

export default Component;
