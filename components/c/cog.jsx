import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8d99nb6o.css';
import '../../css/u/ur2d1ktml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8d99nb6o"/><path class="ur2d1ktml"/>`,
		"fallback": "pixel:cog",
	});
}

export default Component;
