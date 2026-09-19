import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg7avqbog.css';
import '../../css/d/dnoobir0b.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 fg7avqbog"/><path class="clr-i-outline clr-i-outline-path-2 dnoobir0b"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:export-line",
	});
}

export default Component;
