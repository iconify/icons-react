import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty10lgeof.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gycx-tbaz.css';
import '../../css/o/oh6p0fwjz.css';
import '../../css/b/bvktcmhik.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGGRswucRt" class="ty10lgeof"/></defs><g class="ft5dv1b6b"><path class="gycx-tbaz"/><use href="#SVGGRswucRt"/><path class="oh6p0fwjz"/><use href="#SVGGRswucRt"/><path class="bvktcmhik"/></g>`,
		"fallback": "streamline-flex-color:download-box-1",
	});
}

export default Component;
