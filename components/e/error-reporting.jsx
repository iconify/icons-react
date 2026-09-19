import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i850pr6dl.css';
import '../../css/a/af6587_nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i850pr6dl"/><path class="af6587_nt"/></g>`,
		"fallback": "gcp:error-reporting",
	});
}

export default Component;
