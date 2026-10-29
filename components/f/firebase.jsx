import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obuk6_0gn.css';
import '../../css/a/azolbb4yn.css';
import '../../css/x/xxqak_76w.css';
import '../../css/r/rlavracrm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obuk6_0gn"/><path class="azolbb4yn"/><path class="xxqak_76w"/><path class="rlavracrm"/>`,
		"fallback": "devicon:firebase",
	});
}

export default Component;
