import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoy1df99u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoy1df99u"/>`,
		"fallback": "pinhead:arrow-bottom-left",
	});
}

export default Component;
