import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqss8kh_n.css';

const viewBox = {"width":441,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqss8kh_n"/>`,
		"fallback": "file-icons:frege",
	});
}

export default Component;
