import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz48-8bjg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pz48-8bjg"/>`,
		"fallback": "pajamas:check",
	});
}

export default Component;
