import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mimxhhbzg.css';
import '../../css/l/l12r2ccpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mimxhhbzg"/><path class="l12r2ccpb"/>`,
		"fallback": "basil:copy-solid",
	});
}

export default Component;
