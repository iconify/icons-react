import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iqlwd2bmq.css';
import '../../css/e/edbo7_svx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iqlwd2bmq"/><path class="edbo7_svx"/></g>`,
		"fallback": "streamline-ultimate:cloud-file",
	});
}

export default Component;
