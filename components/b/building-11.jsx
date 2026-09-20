import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hts6zhr3z.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hts6zhr3z"/>`,
		"fallback": "maki:building-11",
	});
}

export default Component;
