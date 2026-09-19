import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw4ax2p7p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw4ax2p7p"/>`,
		"fallback": "cib:freecodecamp",
	});
}

export default Component;
