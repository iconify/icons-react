import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-2fky5wf.css';
import '../../css/u/ui9t6fbrk.css';
import '../../css/o/ov3lkhboq.css';
import '../../css/l/l9uwdzjst.css';
import '../../css/l/lomgru0ya.css';
import '../../css/x/xupt9bcnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-2fky5wf"/><rect class="ui9t6fbrk"/><rect class="ov3lkhboq"/><rect class="l9uwdzjst"/><rect class="lomgru0ya"/><rect class="xupt9bcnc"/>`,
		"fallback": "circum:barcode",
	});
}

export default Component;
