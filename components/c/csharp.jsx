import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl8h52i2e.css';
import '../../css/w/wadzaq9on.css';
import '../../css/v/v5qe0mb6u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl8h52i2e"/><path class="wadzaq9on"/><path class="v5qe0mb6u"/>`,
		"fallback": "devicon:csharp",
	});
}

export default Component;
