import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj9cwm6hq.css';
import '../../css/d/d66d9mkgz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj9cwm6hq"/><path class="d66d9mkgz"/>`,
		"fallback": "icomoon-free:clipboard",
	});
}

export default Component;
