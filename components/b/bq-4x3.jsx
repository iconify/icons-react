import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg5u4cbcz.css';
import '../../css/i/ictwwwp8x.css';
import '../../css/l/lc3doybli.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg5u4cbcz"/><path class="ictwwwp8x"/><path class="lc3doybli"/>`,
		"fallback": "flag:bq-4x3",
	});
}

export default Component;
