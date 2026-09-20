import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/og7xrbchw.css';
import '../../css/i/ivan5vfkp.css';
import '../../css/v/vsjujdlqb.css';
import '../../css/r/rfec6fyit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="og7xrbchw"/><path class="ivan5vfkp"/><path class="vsjujdlqb"/><path class="rfec6fyit"/></g>`,
		"fallback": "streamline-sharp-color:cyborg",
	});
}

export default Component;
