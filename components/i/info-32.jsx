import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tweml3g7s.css';
import '../../css/s/sk9-dtbox.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tweml3g7s"/><path clip-rule="evenodd" class="sk9-dtbox"/>`,
		"fallback": "qlementine-icons:info-32",
	});
}

export default Component;
