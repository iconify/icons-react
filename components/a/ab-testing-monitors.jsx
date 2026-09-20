import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gl8phobcm.css';
import '../../css/e/ec-yrwb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gl8phobcm"/><path class="ec-yrwb-h"/></g>`,
		"fallback": "streamline-ultimate:ab-testing-monitors",
	});
}

export default Component;
