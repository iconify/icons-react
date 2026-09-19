import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvuyyuo8q.css';
import '../../css/f/f9hkrrbct.css';
import '../../css/a/act527ope.css';
import '../../css/t/tisyxw3xk.css';
import '../../css/q/qqmm7obvp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvuyyuo8q"/><path class="f9hkrrbct"/><path class="act527ope"/><path class="tisyxw3xk"/><path class="qqmm7obvp"/>`,
		"fallback": "devicon:chartjs-wordmark",
	});
}

export default Component;
