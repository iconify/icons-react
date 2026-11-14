import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f603m2bbo.css';
import '../../css/i/iqekx2b4d.css';
import '../../css/t/t433albvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="f603m2bbo"/><path class="iqekx2b4d"/><path class="t433albvq"/></g>`,
		"fallback": "hugeicons:artificial-intelligence-07",
	});
}

export default Component;
