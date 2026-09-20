import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbf_gokak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbf_gokak"/>`,
		"fallback": "meteor-icons:cube",
	});
}

export default Component;
