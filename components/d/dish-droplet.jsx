import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn6gb_edc.css';
import '../../css/z/zf7mhnbsb.css';
import '../../css/u/uswr87b-r.css';
import '../../css/k/k37kxaccx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cn6gb_edc"/><path class="zf7mhnbsb"/><path class="uswr87b-r"/><path class="k37kxaccx"/></g>`,
		"fallback": "andrsrxn:dish-droplet",
	});
}

export default Component;
