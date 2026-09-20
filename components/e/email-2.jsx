import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdw8jccgb.css';
import '../../css/d/dbs6jgbzz.css';
import '../../css/f/f3gccjkuv.css';
import '../../css/g/g55iq_ryj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdw8jccgb"/><path class="dbs6jgbzz"/><path class="f3gccjkuv"/><path class="g55iq_ryj"/></g>`,
		"fallback": "streamline-cyber-color:email-2",
	});
}

export default Component;
