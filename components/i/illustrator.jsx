import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmryhwkxv.css';
import '../../css/b/b1c8iacsb.css';
import '../../css/n/nxqynyklf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmryhwkxv"/><path class="b1c8iacsb"/><path class="nxqynyklf"/>`,
		"fallback": "mage:illustrator",
	});
}

export default Component;
