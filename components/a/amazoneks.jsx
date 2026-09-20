import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiv2zubtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiv2zubtt"/>`,
		"fallback": "simple-icons:amazoneks",
	});
}

export default Component;
