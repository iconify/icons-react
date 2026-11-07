import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy4soacjr.css';
import '../../css/p/p0x-smbyj.css';
import '../../css/k/k5ylgwyba.css';
import '../../css/e/eaff3bmum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy4soacjr"/><path class="p0x-smbyj"/><path class="k5ylgwyba"/><path class="eaff3bmum"/>`,
		"fallback": "solar:book-bookmark-minimalistic-bold-duotone",
	});
}

export default Component;
