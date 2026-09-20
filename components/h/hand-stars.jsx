import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sua7z4enf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sua7z4enf"/>`,
		"fallback": "reicon:hand-stars",
	});
}

export default Component;
