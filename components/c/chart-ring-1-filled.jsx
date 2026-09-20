import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l67lj9z9h.css';
import '../../css/e/eucgmebad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l67lj9z9h"/><path class="eucgmebad"/>`,
		"fallback": "tdesign:chart-ring-1-filled",
	});
}

export default Component;
