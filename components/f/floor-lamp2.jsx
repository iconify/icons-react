import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv52a4buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cv52a4buq"/>`,
		"fallback": "reicon:floor-lamp2",
	});
}

export default Component;
