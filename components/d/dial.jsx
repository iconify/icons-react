import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un1x6sg7i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un1x6sg7i"/>`,
		"fallback": "f7:dial",
	});
}

export default Component;
