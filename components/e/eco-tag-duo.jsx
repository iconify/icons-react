import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykbbngpem.css';
import '../../css/b/bk-vo5bmr.css';
import '../../css/q/qtw007hfb.css';
import '../../css/b/bcjnld3fc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ykbbngpem"/><path class="bk-vo5bmr"/><path class="qtw007hfb"/><path class="bcjnld3fc"/></g>`,
		"fallback": "streamline-kameleon-color:eco-tag-duo",
	});
}

export default Component;
