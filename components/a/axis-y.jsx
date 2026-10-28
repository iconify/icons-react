import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/egepviu9l.css';
import '../../css/k/kcqe2ebdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="egepviu9l"/><path class="kcqe2ebdb"/></g>`,
		"fallback": "andrsrxn:axis-y",
	});
}

export default Component;
