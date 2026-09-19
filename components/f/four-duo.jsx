import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y28ds_u5j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y28ds_u5j"/>`,
		"fallback": "glyphs:four-duo",
	});
}

export default Component;
