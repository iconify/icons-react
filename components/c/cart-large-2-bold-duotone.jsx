import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgd48xvdj.css';
import '../../css/d/d5jogv23m.css';
import '../../css/s/sxqy4g73d.css';
import '../../css/o/o30f69bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgd48xvdj"/><path class="d5jogv23m"/><path class="sxqy4g73d"/><path class="o30f69bwg"/>`,
		"fallback": "solar:cart-large-2-bold-duotone",
	});
}

export default Component;
