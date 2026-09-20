import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/caee78sut.css';
import '../../css/p/prj-1jbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="caee78sut"/><path class="prj-1jbhd"/></g>`,
		"fallback": "mage:dots-horizontal-circle",
	});
}

export default Component;
