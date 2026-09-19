import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0g6n4nwz.css';
import '../../css/z/zn9kz8x1i.css';
import '../../css/f/f2zhg8brw.css';
import '../../css/l/lza6dyowd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0g6n4nwz"/><path class="zn9kz8x1i"/><path class="f2zhg8brw"/><path class="lza6dyowd"/>`,
		"fallback": "carbon:document-multiple-02",
	});
}

export default Component;
