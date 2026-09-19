import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzggoov-d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzggoov-d"/>`,
		"fallback": "fa7-solid:house-medical-circle-xmark",
	});
}

export default Component;
