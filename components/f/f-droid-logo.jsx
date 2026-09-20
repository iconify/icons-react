import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hc5zd5brf.css';
import '../../css/a/a_pyc2bpc.css';
import '../../css/b/bnfq09b2d.css';
import '../../css/g/gyk0iu-vo.css';
import '../../css/i/iqiksqb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="hc5zd5brf"/><path class="a_pyc2bpc"/><path class="bnfq09b2d"/><path class="gyk0iu-vo"/><path class="iqiksqb_p"/></g>`,
		"fallback": "streamline-logos:f-droid-logo",
	});
}

export default Component;
