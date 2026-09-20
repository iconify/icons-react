import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s3bjkab-l.css';
import '../../css/i/ihw1fh5nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s3bjkab-l"/><path class="ihw1fh5nb"/></g>`,
		"fallback": "keyline-icons:hand-pointer-right-sharp-duotone",
	});
}

export default Component;
