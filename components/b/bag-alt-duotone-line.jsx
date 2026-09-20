import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkkulc1_f.css';
import '../../css/o/opmwddc4w.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmLoa2ckR"><g class="ft5dv1b6b"><path class="kkkulc1_f"/><path class="opmwddc4w"/></g></mask></defs><path mask="url(#SVGmLoa2ckR)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:bag-alt-duotone-line",
	});
}

export default Component;
