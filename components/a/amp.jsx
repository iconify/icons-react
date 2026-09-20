import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt9swpb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt9swpb6x"/>`,
		"fallback": "thesvg-color:amp",
	});
}

export default Component;
