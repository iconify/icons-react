import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztnzy1bij.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztnzy1bij"/>`,
		"fallback": "maki:cemetery-11",
	});
}

export default Component;
