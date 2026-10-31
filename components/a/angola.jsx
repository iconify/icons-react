import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci23lkb2t.css';
import '../../css/q/qfc3cc3so.css';
import '../../css/z/zvg42bbsx.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci23lkb2t"/><path class="qfc3cc3so"/><path class="zvg42bbsx"/>`,
		"fallback": "tabler-flags:angola",
	});
}

export default Component;
