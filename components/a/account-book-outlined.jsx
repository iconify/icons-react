import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqov4sbqp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqov4sbqp"/>`,
		"fallback": "ant-design:account-book-outlined",
	});
}

export default Component;
