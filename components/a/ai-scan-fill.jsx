import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eub1h9d7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eub1h9d7a"/>`,
		"fallback": "si:ai-scan-fill",
	});
}

export default Component;
