import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x0c9_4bxl.css';
import '../../css/g/gqtb--bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x0c9_4bxl"/><path class="gqtb--bxa"/></g>`,
		"fallback": "solar:file-stack-line-duotone",
	});
}

export default Component;
