import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpyt5qnqj.css';
import '../../css/o/oaj_2iwov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpyt5qnqj"/><path class="oaj_2iwov"/>`,
		"fallback": "streamline-pixel:hand-three-finger",
	});
}

export default Component;
