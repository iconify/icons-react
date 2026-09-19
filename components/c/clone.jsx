import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pynblfbve.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pynblfbve"/>`,
		"fallback": "fa7-solid:clone",
	});
}

export default Component;
