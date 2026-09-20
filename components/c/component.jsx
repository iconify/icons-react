import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zo8mk2bnn.css';
import '../../css/t/tt1d5565u.css';
import '../../css/h/hfsfznb3n.css';
import '../../css/f/f4_v000vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect transform="rotate(-45 7.99 17.86)" class="zo8mk2bnn"/><rect transform="rotate(-45 13.85 12)" class="tt1d5565u"/><rect transform="rotate(-45 2.13 12)" class="hfsfznb3n"/><rect transform="rotate(-45 7.99 6.14)" class="f4_v000vi"/></g>`,
		"fallback": "proicons:component",
	});
}

export default Component;
