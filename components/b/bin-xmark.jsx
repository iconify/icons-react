import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2yeubbjh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2yeubbjh"/>`,
		"fallback": "f7:bin-xmark",
	});
}

export default Component;
