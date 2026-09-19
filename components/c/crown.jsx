import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5ey9xbuq.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5ey9xbuq"/>`,
		"fallback": "fa6-solid:crown",
	});
}

export default Component;
