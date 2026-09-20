import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jouqagfwy.css';
import '../../css/s/sugl59zus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jouqagfwy"/><path class="sugl59zus"/>`,
		"fallback": "stash:envelope-flying-duotone",
	});
}

export default Component;
