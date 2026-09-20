import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw73_wxno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw73_wxno"/>`,
		"fallback": "thesvg-color:amg",
	});
}

export default Component;
