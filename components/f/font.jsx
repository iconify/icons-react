import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow9tyrz_p.css';

const viewBox = {"width":925,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow9tyrz_p"/>`,
		"fallback": "websymbol:font",
	});
}

export default Component;
