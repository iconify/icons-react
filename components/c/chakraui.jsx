import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ernn07bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ernn07bjv"/>`,
		"fallback": "simple-icons:chakraui",
	});
}

export default Component;
