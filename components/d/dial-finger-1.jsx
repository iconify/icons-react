import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxzy8rq4r.css';
import '../../css/s/so7q2yzpm.css';
import '../../css/a/a5yhrqmya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yxzy8rq4r"/><path class="so7q2yzpm"/><path class="a5yhrqmya"/></g>`,
		"fallback": "streamline-ultimate-color:dial-finger-1",
	});
}

export default Component;
