import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54-yzbwf.css';
import '../../css/f/fvmq27bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g54-yzbwf"/><path class="fvmq27bls"/>`,
		"fallback": "basil:download-solid",
	});
}

export default Component;
