import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5c9g5bsj.css';
import '../../css/z/zoxwfdcwf.css';
import '../../css/s/su0illb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5c9g5bsj"/><path class="zoxwfdcwf"/><path class="su0illb2z"/>`,
		"fallback": "prime:cloud-download",
	});
}

export default Component;
