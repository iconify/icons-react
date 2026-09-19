import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3231hb9v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3231hb9v"/>`,
		"fallback": "dinkie-icons:die-face5-filled",
	});
}

export default Component;
