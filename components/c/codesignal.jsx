import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxofu1bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxofu1bvp"/>`,
		"fallback": "simple-icons:codesignal",
	});
}

export default Component;
