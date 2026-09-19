import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmyhv4bax.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmyhv4bax"/>`,
		"fallback": "f7:arrow-turn-up-left",
	});
}

export default Component;
