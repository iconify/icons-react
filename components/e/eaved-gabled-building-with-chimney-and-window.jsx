import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qph61-bqi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qph61-bqi"/>`,
		"fallback": "pinhead:eaved-gabled-building-with-chimney-and-window",
	});
}

export default Component;
