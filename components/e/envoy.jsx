import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt1vj9bim.css';
import '../../css/m/mi5_bgb0n.css';
import '../../css/n/nxeppyb-a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt1vj9bim"/><path class="mi5_bgb0n"/><path class="nxeppyb-a"/>`,
		"fallback": "devicon:envoy",
	});
}

export default Component;
