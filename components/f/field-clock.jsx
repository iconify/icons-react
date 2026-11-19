import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/peklzwobw.css';
import '../../css/b/bs9mhcbzn.css';
import '../../css/c/cb9jhojxk.css';
import '../../css/o/oryjwu8rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="peklzwobw"/><path class="bs9mhcbzn"/><circle class="cb9jhojxk"/><path class="oryjwu8rp"/></g>`,
		"fallback": "andrsrxn:field-clock",
	});
}

export default Component;
