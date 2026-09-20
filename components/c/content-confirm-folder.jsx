import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvu_tubrj.css';
import '../../css/w/wz_m09d-y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvu_tubrj"/><path clip-rule="evenodd" class="wz_m09d-y"/>`,
		"fallback": "streamline-block:content-confirm-folder",
	});
}

export default Component;
