import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t76i9hy9s.css';
import '../../css/w/w3k2bgbvi.css';
import '../../css/m/mqimai2df.css';
import '../../css/i/ijb7gtbpo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t76i9hy9s"/><path class="w3k2bgbvi"/><path class="mqimai2df"/><path class="ijb7gtbpo"/>`,
		"fallback": "devicon:googlecloud",
	});
}

export default Component;
