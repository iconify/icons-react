import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4lc6l5aa.css';
import '../../css/m/mixfjwdxi.css';
import '../../css/t/t9o__94ye.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4lc6l5aa"/><path class="mixfjwdxi"/><path class="t9o__94ye"/>`,
		"fallback": "energy-icons:compost-20",
	});
}

export default Component;
