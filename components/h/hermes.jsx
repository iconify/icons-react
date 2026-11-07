import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-_cv6b9l.css';
import '../../css/p/pka91bn6v.css';
import '../../css/k/k3fyfebvj.css';
import '../../css/q/qcrn5ybii.css';
import '../../css/n/nwz4fbcgd.css';
import '../../css/m/m-t4jrboe.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-_cv6b9l"/><path class="pka91bn6v"/><path class="k3fyfebvj"/><path class="qcrn5ybii"/><path class="nwz4fbcgd"/><path class="m-t4jrboe"/>`,
		"fallback": "devicon:hermes",
	});
}

export default Component;
