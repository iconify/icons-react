import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehfjs3bax.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehfjs3bax"/>`,
		"fallback": "pinhead:bicycle-under-key",
	});
}

export default Component;
