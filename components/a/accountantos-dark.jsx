import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2cjcqnme.css';

const viewBox = {"width":1084,"height":1074};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2cjcqnme"/>`,
		"fallback": "thesvg-color:accountantos-dark",
	});
}

export default Component;
