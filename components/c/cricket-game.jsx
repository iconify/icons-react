import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go4h90b_a.css';
import '../../css/h/haxyilbls.css';
import '../../css/y/y17qu75gh.css';
import '../../css/f/f5047ibgu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="go4h90b_a"/><path class="haxyilbls"/><path class="y17qu75gh"/><path class="f5047ibgu"/></g>`,
		"fallback": "fluent-emoji-flat:cricket-game",
	});
}

export default Component;
