import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck__t7yhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck__t7yhu"/>`,
		"fallback": "mdi:format-indent-increase",
	});
}

export default Component;
