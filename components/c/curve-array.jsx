import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zys6lgbco.css';
import '../../css/x/xgnc69vub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zys6lgbco"/><path class="xgnc69vub"/></g>`,
		"fallback": "iconoir:curve-array",
	});
}

export default Component;
