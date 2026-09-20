import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul-tvzctf.css';
import '../../css/q/q7gioobwc.css';
import '../../css/z/zo7fnxb0h.css';
import '../../css/x/xj6xw5bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul-tvzctf"/><path class="q7gioobwc"/><path class="zo7fnxb0h"/><path class="xj6xw5bhu"/>`,
		"fallback": "streamline-ultimate:common-file-text-clock-bold",
	});
}

export default Component;
