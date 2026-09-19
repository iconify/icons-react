import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar355_tpw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar355_tpw"/>`,
		"fallback": "ant-design:cluster-outlined",
	});
}

export default Component;
