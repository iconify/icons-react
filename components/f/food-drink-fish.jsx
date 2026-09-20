import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn_mdboia.css';
import '../../css/k/k78ldxeyy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn_mdboia"/><path class="k78ldxeyy"/>`,
		"fallback": "streamline-pixel:food-drink-fish",
	});
}

export default Component;
