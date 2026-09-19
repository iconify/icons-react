import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj-aobbhw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aj-aobbhw"/>`,
		"fallback": "entypo:grid",
	});
}

export default Component;
