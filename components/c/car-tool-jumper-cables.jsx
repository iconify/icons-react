import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w--7pubbl.css';
import '../../css/j/jfp7e7xsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w--7pubbl"/><path class="jfp7e7xsi"/></g>`,
		"fallback": "streamline-ultimate:car-tool-jumper-cables",
	});
}

export default Component;
