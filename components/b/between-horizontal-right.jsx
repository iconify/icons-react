import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egs2dvbel.css';
import '../../css/i/iipiqypwr.css';
import '../../css/y/yy_xetbre.css';
import '../../css/h/hzizrvbcn.css';
import '../../css/c/cgzp42rlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="egs2dvbel"/><rect class="iipiqypwr"/><rect class="yy_xetbre"/><rect class="hzizrvbcn"/><path class="cgzp42rlg"/></g>`,
		"fallback": "andrsrxn:between-horizontal-right",
	});
}

export default Component;
