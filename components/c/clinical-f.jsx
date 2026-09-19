import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtne9ab1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mtne9ab1u"/>`,
		"fallback": "healthicons:clinical-f",
	});
}

export default Component;
