import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x50gudbtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x50gudbtw"/>`,
		"fallback": "thesvg:farfetch",
	});
}

export default Component;
