import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv3ahtb1h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv3ahtb1h"/>`,
		"fallback": "pinhead:book-with-dna",
	});
}

export default Component;
