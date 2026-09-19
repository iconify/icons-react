import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgh857k-g.css';
import '../../css/h/hgpzimtyu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgh857k-g"/><path class="hgpzimtyu"/>`,
		"fallback": "carbon:chart-high-low",
	});
}

export default Component;
