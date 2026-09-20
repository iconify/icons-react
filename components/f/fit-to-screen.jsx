import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aucqcrb5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aucqcrb5g"/>`,
		"fallback": "ix:fit-to-screen",
	});
}

export default Component;
