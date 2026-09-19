import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/icjlvdb0c.css';
import '../../css/z/zlhh38l7r.css';
import '../../css/p/ptvu1u_4n.css';
import '../../css/t/tvse9mhcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="icjlvdb0c"/><path class="zlhh38l7r"/><circle class="ptvu1u_4n"/><path class="tvse9mhcg"/></g>`,
		"fallback": "hugeicons:book-user",
	});
}

export default Component;
