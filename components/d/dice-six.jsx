import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2nufne7d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2nufne7d"/>`,
		"fallback": "fa7-solid:dice-six",
	});
}

export default Component;
