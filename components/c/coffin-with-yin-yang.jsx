import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pida6145z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pida6145z"/>`,
		"fallback": "pinhead:coffin-with-yin-yang",
	});
}

export default Component;
