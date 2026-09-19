import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_wmkzbgv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z_wmkzbgv"/>`,
		"fallback": "glyphs:hand-horns-bold",
	});
}

export default Component;
