import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yszr0-bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yszr0-bub"/>`,
		"fallback": "vadivam:footprints",
	});
}

export default Component;
