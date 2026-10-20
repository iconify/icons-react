import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp8_uebuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp8_uebuc"/>`,
		"fallback": "vadivam:grip",
	});
}

export default Component;
