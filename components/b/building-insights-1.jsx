import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_n2pacdg.css';
import '../../css/t/t25-mccrj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_n2pacdg"/><path class="t25-mccrj"/>`,
		"fallback": "carbon:building-insights-1",
	});
}

export default Component;
