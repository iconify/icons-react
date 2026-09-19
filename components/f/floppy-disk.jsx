import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh_mbgb_j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh_mbgb_j"/>`,
		"fallback": "fa6-solid:floppy-disk",
	});
}

export default Component;
