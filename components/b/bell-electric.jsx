import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zr6myfbli.css';
import '../../css/c/cnc8kxp4p.css';
import '../../css/o/o3jl589pi.css';
import '../../css/g/gl_t73bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zr6myfbli"/><circle class="cnc8kxp4p"/><circle class="o3jl589pi"/><rect class="gl_t73bxh"/></g>`,
		"fallback": "lucide:bell-electric",
	});
}

export default Component;
