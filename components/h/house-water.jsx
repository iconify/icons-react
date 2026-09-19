import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xq4i7fvzd.css';
import '../../css/r/ru21x0hju.css';
import '../../css/z/zdrc5xbac.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xq4i7fvzd"/><path class="ru21x0hju"/><path class="zdrc5xbac"/></g>`,
		"fallback": "glyphs:house-water",
	});
}

export default Component;
