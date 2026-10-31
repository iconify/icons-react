import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc41uk-dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc41uk-dj wm-k"/>`,
		"fallback": "withicons:avatar-woman-hijab-gloss",
	});
}

export default Component;
