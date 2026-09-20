import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz_a4acti.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz_a4acti"/>`,
		"fallback": "pinhead:8",
	});
}

export default Component;
