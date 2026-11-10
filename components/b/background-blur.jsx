import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfzc6wbvm.css';
import '../../css/k/k0pfecbhp.css';
import '../../css/c/cvhnd3b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zfzc6wbvm"/><path class="k0pfecbhp"/><path class="cvhnd3b0u"/></g>`,
		"fallback": "andrsrxn:background-blur",
	});
}

export default Component;
