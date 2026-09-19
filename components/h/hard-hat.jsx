import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wzq7di5dx.css';
import '../../css/i/ilo9ddc7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wzq7di5dx"/><path class="ilo9ddc7n"/></g>`,
		"fallback": "hugeicons:hard-hat",
	});
}

export default Component;
