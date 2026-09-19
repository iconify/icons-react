import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfnld8b9e.css';
import '../../css/h/hum_vbh1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfnld8b9e"/><path class="hum_vbh1y"/>`,
		"fallback": "bx:copy-alt",
	});
}

export default Component;
