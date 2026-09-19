import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pt_vuyb1j.css';
import '../../css/p/py9xcv6ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pt_vuyb1j"/><path class="py9xcv6ti"/></g>`,
		"fallback": "heroicons:chart-pie",
	});
}

export default Component;
