import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scrsn1bbj.css';
import '../../css/t/tsynbibhk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scrsn1bbj"/><path class="tsynbibhk"/>`,
		"fallback": "streamline-pixel:food-drink-fruit-cherry",
	});
}

export default Component;
