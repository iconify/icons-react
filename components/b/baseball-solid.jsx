import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztr0zpbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztr0zpbum"/>`,
		"fallback": "iconaut:baseball-solid",
	});
}

export default Component;
