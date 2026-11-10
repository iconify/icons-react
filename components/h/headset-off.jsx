import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/ql91tibft.css';
import '../../css/u/u63uw6sst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ql91tibft"/><path class="u63uw6sst"/></g>`,
		"fallback": "andrsrxn:headset-off",
	});
}

export default Component;
