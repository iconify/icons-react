import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rwo6qqb0d.css';
import '../../css/n/n5jacodfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="rwo6qqb0d"/><path class="n5jacodfy"/></g>`,
		"fallback": "hugeicons:baby-02",
	});
}

export default Component;
