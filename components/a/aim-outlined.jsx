import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trohwccmt.css';
import '../../css/e/eq354xb_i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trohwccmt"/><path class="eq354xb_i"/>`,
		"fallback": "ant-design:aim-outlined",
	});
}

export default Component;
