import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8wdw2bdw.css';
import '../../css/g/gmcwwh2ne.css';
import '../../css/v/vwqq62bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d8wdw2bdw"/><rect class="gmcwwh2ne"/><rect class="vwqq62bgt"/></g>`,
		"fallback": "lucide:decimals-arrow-right",
	});
}

export default Component;
