import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crhxvtukx.css';
import '../../css/m/m1mw2hbxc.css';
import '../../css/q/q7vfdtbpt.css';
import '../../css/z/z8l5u13up.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crhxvtukx"/><path class="m1mw2hbxc"/><path class="q7vfdtbpt"/><path class="z8l5u13up"/>`,
		"fallback": "devicon:html5",
	});
}

export default Component;
