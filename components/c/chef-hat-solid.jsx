import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvz2wcf8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvz2wcf8t"/>`,
		"fallback": "withicons:chef-hat-solid",
	});
}

export default Component;
