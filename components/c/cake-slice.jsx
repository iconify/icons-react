import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9k1m0njm.css';
import '../../css/e/e49gycibs.css';
import '../../css/j/jka25y6xd.css';
import '../../css/v/v0o9i-r8z.css';
import '../../css/z/zzyf96b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9k1m0njm"/><circle transform="rotate(90 12.05 6.97)" class="e49gycibs"/><circle transform="rotate(90 11.82 6.97)" class="jka25y6xd"/><path class="v0o9i-r8z"/><path class="zzyf96b_a"/></g>`,
		"fallback": "andrsrxn:cake-slice",
	});
}

export default Component;
