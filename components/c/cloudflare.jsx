import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn76znsys.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn76znsys"/>`,
		"fallback": "devicon-plain:cloudflare",
	});
}

export default Component;
