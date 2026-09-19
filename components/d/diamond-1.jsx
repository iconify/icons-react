import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fxtjowbmc.css';
import '../../css/a/a9a5abcwb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect transform="rotate(45 40 12)" class="fxtjowbmc"/><rect transform="rotate(45 40 26)" class="a9a5abcwb"/></g>`,
		"fallback": "glyphs-poly:diamond-1",
	});
}

export default Component;
