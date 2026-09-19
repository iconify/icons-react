import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwe291bsk.css';
import '../../css/m/mgz4g1bbz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwe291bsk"/><path class="mgz4g1bbz"/>`,
		"fallback": "icomoon-free:eye-minus",
	});
}

export default Component;
