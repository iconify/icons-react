import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ranh4pb3m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ranh4pb3m"/>`,
		"fallback": "devicon-plain:angular",
	});
}

export default Component;
