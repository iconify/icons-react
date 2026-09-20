import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xktuadgnz.css';
import '../../css/q/q34r_4blg.css';
import '../../css/r/r-yge7b7y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xktuadgnz"/><path class="q34r_4blg"/><path class="r-yge7b7y"/>`,
		"fallback": "streamline-pixel:food-drink-desert-cake",
	});
}

export default Component;
