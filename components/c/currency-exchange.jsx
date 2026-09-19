import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekvdh_bjk.css';
import '../../css/n/n5smlmpfr.css';
import '../../css/j/j3985abug.css';
import '../../css/d/dclgqfbhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ekvdh_bjk"/><path class="n5smlmpfr"/><circle class="j3985abug"/><path class="dclgqfbhu"/>`,
		"fallback": "flat-color-icons:currency-exchange",
	});
}

export default Component;
