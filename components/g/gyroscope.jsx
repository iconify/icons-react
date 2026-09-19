import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs6jf3bos.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs6jf3bos"/>`,
		"fallback": "dinkie-icons:gyroscope",
	});
}

export default Component;
