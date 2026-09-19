import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-e__fb9j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-e__fb9j"/>`,
		"fallback": "fa7-solid:hryvnia",
	});
}

export default Component;
