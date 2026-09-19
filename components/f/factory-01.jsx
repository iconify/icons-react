import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-nqjvbzj.css';
import '../../css/p/pz6l3xh3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-nqjvbzj"/><path class="pz6l3xh3f"/></g>`,
		"fallback": "hugeicons:factory-01",
	});
}

export default Component;
