import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/fuvp5_4iq.css';
import '../../css/z/zridt8jdc.css';
import '../../css/a/ahe89fbdt.css';
import '../../css/g/gaiyfj76i.css';
import '../../css/s/shw_36b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="fuvp5_4iq"/><path class="zridt8jdc"/><path class="ahe89fbdt"/><path class="gaiyfj76i"/><path class="shw_36b0v"/></g>`,
		"fallback": "streamline-sharp-color:hotel-bed-2",
	});
}

export default Component;
