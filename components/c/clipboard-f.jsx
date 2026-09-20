import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_ifm87jw.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_ifm87jw"/>`,
		"fallback": "jam:clipboard-f",
	});
}

export default Component;
