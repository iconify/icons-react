import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cmpz32o5f.css';
import '../../css/y/yxayk5b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cmpz32o5f"/><path class="yxayk5b9j"/></g>`,
		"fallback": "proicons:briefcase",
	});
}

export default Component;
