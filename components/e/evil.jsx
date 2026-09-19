import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bnqq59byx.css';
import '../../css/y/ypcu2o9-r.css';
import '../../css/v/vrkhalo1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bnqq59byx"/><path class="ypcu2o9-r"/><path class="vrkhalo1k"/></g>`,
		"fallback": "hugeicons:evil",
	});
}

export default Component;
