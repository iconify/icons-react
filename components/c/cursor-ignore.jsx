import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmcm0s1it.css';
import '../../css/h/hmryub9or.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path transform="matrix(.92099 0 0 .92169 -.41 .382)" class="bmcm0s1it"/><path class="hmryub9or"/>`,
		"fallback": "catppuccin:cursor-ignore",
	});
}

export default Component;
