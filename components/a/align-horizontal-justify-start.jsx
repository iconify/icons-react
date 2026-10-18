import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv0sx3-bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv0sx3-bi"/>`,
		"fallback": "vadivam:align-horizontal-justify-start",
	});
}

export default Component;
