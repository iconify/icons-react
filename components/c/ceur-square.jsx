import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzcmdf5sf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzcmdf5sf"/>`,
		"fallback": "academicons:ceur-square",
	});
}

export default Component;
