import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/el0bg7bft.css';
import '../../css/x/x2w1qinpe.css';
import '../../css/p/pcijz0bjw.css';
import '../../css/i/i9i2fybao.css';
import '../../css/c/c0kc3m79n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="el0bg7bft"/><path class="x2w1qinpe"/><path class="pcijz0bjw"/><path class="i9i2fybao"/><path class="c0kc3m79n"/></g>`,
		"fallback": "andrsrxn:app-window-bug",
	});
}

export default Component;
