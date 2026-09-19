import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e75fnac6d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e75fnac6d"/>`,
		"fallback": "fa7-solid:house-circle-xmark",
	});
}

export default Component;
