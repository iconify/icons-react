import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6j6fiaxo.css';

const viewBox = {"width":256,"height":199};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6j6fiaxo"/>`,
		"fallback": "thesvg-color:discord",
	});
}

export default Component;
