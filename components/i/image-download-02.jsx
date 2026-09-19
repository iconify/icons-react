import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oqz5_v7hs.css';
import '../../css/s/sfh0olbnb.css';
import '../../css/b/bg03birqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oqz5_v7hs"/><path class="sfh0olbnb"/><path class="bg03birqg"/></g>`,
		"fallback": "hugeicons:image-download-02",
	});
}

export default Component;
