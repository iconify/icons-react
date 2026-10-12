import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5f-ncuco.css';
import '../../css/u/uw7i5bbuk.css';
import '../../css/t/tdqb0gbja.css';
import '../../css/y/y_4-pbcui.css';
import '../../css/m/m5lg2_o2n.css';
import '../../css/c/c1gbigdvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o5f-ncuco"/><path class="uw7i5bbuk"/><circle class="tdqb0gbja"/><circle class="y_4-pbcui"/><circle class="m5lg2_o2n"/><circle class="c1gbigdvz"/></g>`,
		"fallback": "andrsrxn:git-diff",
	});
}

export default Component;
