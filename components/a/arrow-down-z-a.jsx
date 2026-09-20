import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggzg1wb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggzg1wb3b"/>`,
		"fallback": "vadivam:arrow-down-z-a",
	});
}

export default Component;
