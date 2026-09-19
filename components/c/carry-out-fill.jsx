import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or5g61b_p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or5g61b_p"/>`,
		"fallback": "ant-design:carry-out-fill",
	});
}

export default Component;
