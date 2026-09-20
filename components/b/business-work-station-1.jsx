import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq6f2zwqf.css';
import '../../css/f/fh9ktfbuv.css';
import '../../css/z/zkcwijbin.css';
import '../../css/g/g-ema6bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iq6f2zwqf"/><path class="fh9ktfbuv"/><path class="zkcwijbin"/><path class="g-ema6bgx"/></g>`,
		"fallback": "streamline-cyber-color:business-work-station-1",
	});
}

export default Component;
