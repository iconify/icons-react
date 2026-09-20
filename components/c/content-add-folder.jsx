import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvu_tubrj.css';
import '../../css/y/yb873zwsf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvu_tubrj"/><path clip-rule="evenodd" class="yb873zwsf"/>`,
		"fallback": "streamline-block:content-add-folder",
	});
}

export default Component;
