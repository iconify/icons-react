import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cny_l1kll.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cny_l1kll"/>`,
		"fallback": "whh:certificatethree",
	});
}

export default Component;
