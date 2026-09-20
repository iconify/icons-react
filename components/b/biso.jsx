import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0hb15zdf.css';
import '../../css/n/nifbesbdu.css';
import '../../css/z/zn93f2bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0hb15zdf"/><path class="nifbesbdu"/><path class="zn93f2bdr"/>`,
		"fallback": "token:biso",
	});
}

export default Component;
