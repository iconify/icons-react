import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuv-8rb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuv-8rb_s"/>`,
		"fallback": "thesvg:facepunch",
	});
}

export default Component;
