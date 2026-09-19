import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8g3supcw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8g3supcw"/>`,
		"fallback": "devicon-plain:githubactions",
	});
}

export default Component;
