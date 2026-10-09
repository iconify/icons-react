import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kekwewb2q.css';
import '../../css/a/a52o52b2q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kekwewb2q"/><path class="a52o52b2q"/>`,
		"fallback": "energy-icons:conveyor-20-bold",
	});
}

export default Component;
