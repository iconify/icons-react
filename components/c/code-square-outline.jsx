import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyuvr7oih.css';
import '../../css/z/zxcwapovt.css';
import '../../css/z/zr2sxqb6e.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyuvr7oih"/><path class="zxcwapovt"/><path class="zr2sxqb6e"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`,
		"fallback": "solar:code-square-outline",
	});
}

export default Component;
