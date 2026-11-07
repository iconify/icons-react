import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lke-0bbfe.css';
import '../../css/q/q6wvq5n9h.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lke-0bbfe"/><path class="q6wvq5n9h"/><path clip-rule="evenodd" class="d25mwn3tm"/>`,
		"fallback": "solar:file-braces-outline",
	});
}

export default Component;
