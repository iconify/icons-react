import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs490bctn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs490bctn"/>`,
		"fallback": "cbi:co2",
	});
}

export default Component;
