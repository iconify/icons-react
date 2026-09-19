import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhgjpo-5s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhgjpo-5s"/>`,
		"fallback": "devicon-plain:cloudflare-wordmark",
	});
}

export default Component;
