import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x34ez1bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x34ez1bne"/>`,
		"fallback": "vadivam:columns-4",
	});
}

export default Component;
