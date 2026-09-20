import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vc9btf7bh.css';
import '../../css/s/sauz6wbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vc9btf7bh"/><path class="sauz6wbro"/></g>`,
		"fallback": "streamline-ultimate:antenna",
	});
}

export default Component;
