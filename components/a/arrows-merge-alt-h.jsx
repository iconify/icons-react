import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxw5baccr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxw5baccr"/>`,
		"fallback": "gg:arrows-merge-alt-h",
	});
}

export default Component;
