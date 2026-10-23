import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg6l3ac9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg6l3ac9k"/>`,
		"fallback": "vadivam:bed-double",
	});
}

export default Component;
