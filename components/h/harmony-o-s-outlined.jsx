import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td58n_bsk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td58n_bsk"/>`,
		"fallback": "ant-design:harmony-o-s-outlined",
	});
}

export default Component;
