import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riyh8pbhg.css';

const viewBox = {"width":505,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riyh8pbhg"/>`,
		"fallback": "file-icons:circleci",
	});
}

export default Component;
