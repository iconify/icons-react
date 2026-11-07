import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd9cc7byy.css';
import '../../css/p/p0x-smbyj.css';
import '../../css/k/k5ylgwyba.css';
import '../../css/s/sdgjn765p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd9cc7byy"/><path class="p0x-smbyj"/><path class="k5ylgwyba"/><path class="sdgjn765p"/>`,
		"fallback": "solar:book-minimalistic-bold-duotone",
	});
}

export default Component;
