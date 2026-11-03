import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-k0yub0q.css';
import '../../css/t/tyr-cab1g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-k0yub0q"/><path class="tyr-cab1g"/>`,
		"fallback": "devicon:dbvisualizer",
	});
}

export default Component;
