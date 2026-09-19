import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phjh-5c_c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phjh-5c_c"/>`,
		"fallback": "carbon:character-sentence-case",
	});
}

export default Component;
