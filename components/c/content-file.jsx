import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgy9fjbif.css';
import '../../css/f/fvtvtsbqq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgy9fjbif"/><path class="fvtvtsbqq"/>`,
		"fallback": "streamline-block:content-file",
	});
}

export default Component;
