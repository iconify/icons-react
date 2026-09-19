import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmqemt8zm.css';
import '../../css/k/katrf5x9c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmqemt8zm"/><path class="katrf5x9c"/>`,
		"fallback": "devicon:githubactions",
	});
}

export default Component;
