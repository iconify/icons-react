import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvu_tubrj.css';
import '../../css/o/o9uqq6b3i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvu_tubrj"/><path clip-rule="evenodd" class="o9uqq6b3i"/>`,
		"fallback": "streamline-block:content-delete-folder",
	});
}

export default Component;
