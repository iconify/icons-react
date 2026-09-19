import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7mha9bmm.css';
import '../../css/e/einl4h1qq.css';
import '../../css/a/a-5q5tb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7mha9bmm"/><path class="einl4h1qq"/><path class="a-5q5tb7j"/>`,
		"fallback": "gcp:firestore",
	});
}

export default Component;
