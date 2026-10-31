import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfvcz_evv.css';
import '../../css/q/q03fz5bjx.css';
import '../../css/l/ldkk9pbbi.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfvcz_evv"/><path class="q03fz5bjx"/><path class="ldkk9pbbi"/>`,
		"fallback": "tabler-flags:chad",
	});
}

export default Component;
