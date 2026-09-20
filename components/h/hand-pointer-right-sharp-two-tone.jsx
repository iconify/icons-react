import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s3bjkab-l.css';
import '../../css/q/qsns7ccht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s3bjkab-l"/><path class="qsns7ccht"/></g>`,
		"fallback": "keyline-icons:hand-pointer-right-sharp-two-tone",
	});
}

export default Component;
