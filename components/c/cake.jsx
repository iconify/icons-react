import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cdpy0gweh.css';
import '../../css/y/ye_6tc6ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cdpy0gweh"/><path class="ye_6tc6ei"/></g>`,
		"fallback": "reicon:cake",
	});
}

export default Component;
