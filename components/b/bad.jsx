import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncjysacrn.css';
import '../../css/i/ialpo-rom.css';
import '../../css/f/fks66gnvh.css';
import '../../css/d/d6a34cbvy.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncjysacrn"/><path class="ialpo-rom"/><circle class="fks66gnvh"/><circle class="d6a34cbvy"/>`,
		"fallback": "iwwa:bad",
	});
}

export default Component;
