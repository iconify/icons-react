import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg57_081g.css';
import '../../css/a/an7n-_bwo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg57_081g"/><path class="an7n-_bwo"/>`,
		"fallback": "devicon:babel",
	});
}

export default Component;
