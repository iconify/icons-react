import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcth3ex-n.css';
import '../../css/r/r6i16ds0i.css';
import '../../css/h/hg066707f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bcth3ex-n"/><circle class="r6i16ds0i"/><path class="hg066707f"/></g>`,
		"fallback": "iconamoon:discover-duotone",
	});
}

export default Component;
