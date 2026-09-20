import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2cwfz8jg.css';
import '../../css/s/s5kpojbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2cwfz8jg"/><path class="s5kpojbcs"/>`,
		"fallback": "octicon:cpu-24",
	});
}

export default Component;
