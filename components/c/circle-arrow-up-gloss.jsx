import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb5lmg94y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb5lmg94y"/>`,
		"fallback": "withicons:circle-arrow-up-gloss",
	});
}

export default Component;
