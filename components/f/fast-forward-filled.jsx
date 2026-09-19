import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3myu-bdz.css';
import '../../css/v/vikitco5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3myu-bdz"/><path class="vikitco5b"/>`,
		"fallback": "boxicons:fast-forward-filled",
	});
}

export default Component;
