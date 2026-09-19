import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftu55jb0u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ftu55jb0u"/>`,
		"fallback": "gravity-ui:gear-play",
	});
}

export default Component;
