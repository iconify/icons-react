import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4f9lhb6a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4f9lhb6a"/>`,
		"fallback": "f7:briefcase-fill",
	});
}

export default Component;
