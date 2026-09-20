import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c94fvigpe.css';
import '../../css/o/o2w5jcckl.css';
import '../../css/b/b5njnqb9q.css';
import '../../css/c/cuexzmbor.css';
import '../../css/o/oxnwwcb0o.css';
import '../../css/z/zgesedcxp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c94fvigpe"/><circle class="o2w5jcckl"/><path class="b5njnqb9q"/><circle class="cuexzmbor"/><circle class="oxnwwcb0o"/><circle class="zgesedcxp"/>`,
		"fallback": "openmoji:eye-in-speech-bubble",
	});
}

export default Component;
