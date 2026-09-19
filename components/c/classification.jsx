import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qerqc_trz.css';
import '../../css/g/g3fxfcd6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qerqc_trz"/><path class="g3fxfcd6n"/>`,
		"fallback": "carbon:classification",
	});
}

export default Component;
