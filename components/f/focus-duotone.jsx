import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x72m91b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary x72m91b6w"/>`,
		"fallback": "iconaut:focus-duotone",
	});
}

export default Component;
