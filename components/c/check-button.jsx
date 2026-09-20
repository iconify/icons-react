import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xi_1hpbju.css';
import '../../css/a/au4p_eikh.css';
import '../../css/m/mp4w44wnb.css';
import '../../css/i/iod9gnb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xi_1hpbju"/><path class="au4p_eikh"/><path class="mp4w44wnb"/><path class="iod9gnb2l"/></g>`,
		"fallback": "streamline-ultimate-color:check-button",
	});
}

export default Component;
