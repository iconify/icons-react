import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/phrdbjbch.css';
import '../../css/e/eq1cy8nwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="phrdbjbch"/><path class="eq1cy8nwp"/></g>`,
		"fallback": "hugeicons:circle-check-big",
	});
}

export default Component;
