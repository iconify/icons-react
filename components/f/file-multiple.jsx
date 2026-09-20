import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vawpk_1bq.css';
import '../../css/k/kvjhaxmvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vawpk_1bq"/><path class="kvjhaxmvd"/></g>`,
		"fallback": "proicons:file-multiple",
	});
}

export default Component;
