import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqzmu0bun.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqzmu0bun"/>`,
		"fallback": "devicon-plain:homebrew-wordmark",
	});
}

export default Component;
