import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf19ixb5n.css';
import '../../css/t/t_qou-ite.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf19ixb5n"/><path class="t_qou-ite"/>`,
		"fallback": "boxicons:bookmark-minus-alt",
	});
}

export default Component;
