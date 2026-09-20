import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mysg7cy2i.css';
import '../../css/j/juxl4d1ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mysg7cy2i"/><path class="juxl4d1ut"/>`,
		"fallback": "pixel:graduation-cap-solid",
	});
}

export default Component;
