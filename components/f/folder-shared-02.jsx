import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-ncbofqs.css';
import '../../css/s/s9uq5pb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-ncbofqs"/><path class="s9uq5pb8o"/></g>`,
		"fallback": "hugeicons:folder-shared-02",
	});
}

export default Component;
