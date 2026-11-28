import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auxxc2gzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auxxc2gzj"/>`,
		"fallback": "iconaut:image-play-solid",
	});
}

export default Component;
