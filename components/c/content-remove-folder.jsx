import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvu_tubrj.css';
import '../../css/r/ry6cqhbcg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvu_tubrj"/><path clip-rule="evenodd" class="ry6cqhbcg"/>`,
		"fallback": "streamline-block:content-remove-folder",
	});
}

export default Component;
