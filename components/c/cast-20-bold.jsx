import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7g4iqb1i.css';
import '../../css/m/mwlvaabdt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7g4iqb1i"/><path class="mwlvaabdt"/>`,
		"fallback": "energy-icons:cast-20-bold",
	});
}

export default Component;
