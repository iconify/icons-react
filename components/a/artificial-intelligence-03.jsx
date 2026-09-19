import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gn8s5_h2o.css';
import '../../css/f/fzazl3jbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gn8s5_h2o"/><path class="fzazl3jbx"/></g>`,
		"fallback": "hugeicons:artificial-intelligence-03",
	});
}

export default Component;
