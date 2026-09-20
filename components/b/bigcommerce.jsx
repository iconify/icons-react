import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy3n3v-_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy3n3v-_s"/>`,
		"fallback": "thesvg-color:bigcommerce",
	});
}

export default Component;
