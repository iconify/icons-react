import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq_o23b8e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq_o23b8e"/>`,
		"fallback": "cib:heroku",
	});
}

export default Component;
