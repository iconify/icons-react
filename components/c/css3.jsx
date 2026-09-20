import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwkk87onx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwkk87onx"/>`,
		"fallback": "thesvg:css3",
	});
}

export default Component;
