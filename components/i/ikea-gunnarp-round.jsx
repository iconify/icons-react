import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp_jc4bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp_jc4bkh"/>`,
		"fallback": "cbi:ikea-gunnarp-round",
	});
}

export default Component;
