import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbt_36vsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbt_36vsy"/>`,
		"fallback": "withicons:fuel-gloss",
	});
}

export default Component;
