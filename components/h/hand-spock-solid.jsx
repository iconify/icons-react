import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd6-75btu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd6-75btu"/>`,
		"fallback": "la:hand-spock-solid",
	});
}

export default Component;
