import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td855uyua.css';
import '../../css/x/x6t1awols.css';
import '../../css/d/d0nccrbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td855uyua"/><path class="x6t1awols"/><path clip-rule="evenodd" class="d0nccrbuv"/>`,
		"fallback": "solar:bag-4-outline",
	});
}

export default Component;
