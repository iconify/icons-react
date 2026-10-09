import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/j/jh9opkozm.css';
import '../../css/y/yr5x9tnbi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="jh9opkozm"/><path class="yr5x9tnbi"/>`,
		"fallback": "energy-icons:contrast-48",
	});
}

export default Component;
