import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rxnhdoavd.css';
import '../../css/u/u3hnpw_eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rxnhdoavd"/><path class="u3hnpw_eb"/></g>`,
		"fallback": "hugeicons:cursor-hold-01",
	});
}

export default Component;
