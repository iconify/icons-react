import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adrdhb55w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adrdhb55w"/>`,
		"fallback": "keyline-icons:circle-euro-fill",
	});
}

export default Component;
