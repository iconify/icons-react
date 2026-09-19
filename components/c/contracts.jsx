import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o26-jtsst.css';
import '../../css/z/zk0i3d1nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o26-jtsst"/><path class="zk0i3d1nf"/></g>`,
		"fallback": "hugeicons:contracts",
	});
}

export default Component;
