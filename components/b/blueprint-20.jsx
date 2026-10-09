import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrnmkvb0i.css';
import '../../css/c/c-9oiujyu.css';
import '../../css/j/joab5_bzz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrnmkvb0i"/><path class="c-9oiujyu"/><path class="joab5_bzz"/>`,
		"fallback": "energy-icons:blueprint-20",
	});
}

export default Component;
