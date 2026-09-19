import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3doyjoii.css';
import '../../css/m/mf9jpj7oz.css';
import '../../css/t/t4s-b1bpo.css';
import '../../css/t/te7q60mep.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3doyjoii"/><path class="mf9jpj7oz"/><path class="t4s-b1bpo"/><path class="te7q60mep"/>`,
		"fallback": "devicon:clarity",
	});
}

export default Component;
