import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-wgo9jbw.css';
import '../../css/b/bdc1sdbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k-wgo9jbw"/><path class="bdc1sdbbf"/></g>`,
		"fallback": "hugeicons:estimate-02",
	});
}

export default Component;
