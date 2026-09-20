import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dggly8hlh.css';
import '../../css/r/r1dxseh_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dggly8hlh"/><path class="r1dxseh_a"/>`,
		"fallback": "stash:comments-solid",
	});
}

export default Component;
