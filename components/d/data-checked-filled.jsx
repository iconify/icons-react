import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnuozhkls.css';
import '../../css/s/s1i3vlbsf.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnuozhkls"/><path class="s1i3vlbsf"/>`,
		"fallback": "tdesign:data-checked-filled",
	});
}

export default Component;
