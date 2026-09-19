import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd2i4dbpo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd2i4dbpo"/>`,
		"fallback": "dinkie-icons:heart-white-suit-circled-small",
	});
}

export default Component;
