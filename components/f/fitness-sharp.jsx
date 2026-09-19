import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7k5gibth.css';
import '../../css/k/kjznt1r2d.css';
import '../../css/o/o-y2m3oef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7k5gibth"/><path class="kjznt1r2d"/><path class="o-y2m3oef"/>`,
		"fallback": "famicons:fitness-sharp",
	});
}

export default Component;
