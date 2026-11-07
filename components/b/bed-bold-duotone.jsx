import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv26kqbrj.css';
import '../../css/s/s7rjj21fg.css';
import '../../css/i/inygc8bcc.css';
import '../../css/a/auhv3ob1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv26kqbrj"/><path class="s7rjj21fg"/><path class="inygc8bcc"/><path class="auhv3ob1q"/>`,
		"fallback": "solar:bed-bold-duotone",
	});
}

export default Component;
