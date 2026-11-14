import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhzocojuh.css';
import '../../css/i/i5thibbft.css';
import '../../css/c/c44m2o2uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhzocojuh"/><path class="i5thibbft"/><path class="c44m2o2uh"/></g>`,
		"fallback": "hugeicons:file-axis-3d",
	});
}

export default Component;
