import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tblo-pfoi.css';
import '../../css/s/s26yw0bri.css';
import '../../css/m/mdbg4dcqd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tblo-pfoi"/><path clip-rule="evenodd" class="s26yw0bri"/><path clip-rule="evenodd" class="mdbg4dcqd"/>`,
		"fallback": "devicon:alpinejs-wordmark",
	});
}

export default Component;
