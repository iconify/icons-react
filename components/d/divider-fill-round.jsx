import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd18994yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd18994yc"/>`,
		"fallback": "coolicons:divider-fill-round",
	});
}

export default Component;
