import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zki3xmbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zki3xmbyr"/>`,
		"fallback": "reicon:glasses2",
	});
}

export default Component;
