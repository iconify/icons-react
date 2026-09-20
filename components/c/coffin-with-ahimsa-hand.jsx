import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4mzv2b5f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4mzv2b5f"/>`,
		"fallback": "pinhead:coffin-with-ahimsa-hand",
	});
}

export default Component;
