import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rfvz00b-y.css';
import '../../css/r/rxnhdoavd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rfvz00b-y"/><path class="rxnhdoavd"/></g>`,
		"fallback": "hugeicons:cursor-disabled-01",
	});
}

export default Component;
