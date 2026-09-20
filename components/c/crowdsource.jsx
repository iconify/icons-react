import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocf_5ubml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocf_5ubml"/>`,
		"fallback": "thesvg-color:crowdsource",
	});
}

export default Component;
