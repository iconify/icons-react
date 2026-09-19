import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qugl5fp2v.css';
import '../../css/j/jln5mowjq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qugl5fp2v"/><path class="jln5mowjq"/>`,
		"fallback": "ant-design:delete-twotone",
	});
}

export default Component;
