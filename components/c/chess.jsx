import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aku9edhek.css';
import '../../css/i/il_8vobti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aku9edhek"/><path class="il_8vobti"/>`,
		"fallback": "bxs:chess",
	});
}

export default Component;
