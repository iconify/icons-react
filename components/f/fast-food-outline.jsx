import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynrzkyrbc.css';
import '../../css/x/xh625w_0z.css';
import '../../css/i/itkvrn4ca.css';
import '../../css/l/l0t-gpb8d.css';
import '../../css/y/yza2inbiw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynrzkyrbc"/><path class="xh625w_0z"/><path class="itkvrn4ca"/><path class="l0t-gpb8d"/><path class="yza2inbiw"/>`,
		"fallback": "famicons:fast-food-outline",
	});
}

export default Component;
