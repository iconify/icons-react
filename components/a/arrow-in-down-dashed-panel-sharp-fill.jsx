import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvsnxacyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvsnxacyv"/>`,
		"fallback": "keyline-icons:arrow-in-down-dashed-panel-sharp-fill",
	});
}

export default Component;
