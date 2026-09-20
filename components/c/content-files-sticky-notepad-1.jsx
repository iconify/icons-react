import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi01iacmk.css';
import '../../css/r/rghyt8iyb.css';
import '../../css/z/zqb02xggr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi01iacmk"/><path class="rghyt8iyb"/><path class="zqb02xggr"/>`,
		"fallback": "streamline-pixel:content-files-sticky-notepad-1",
	});
}

export default Component;
