import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmh5macky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmh5macky"/>`,
		"fallback": "material-icon-theme:babel",
	});
}

export default Component;
