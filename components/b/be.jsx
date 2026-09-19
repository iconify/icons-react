import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3mdcff1x.css';
import '../../css/g/g72kchb_v.css';
import '../../css/x/xmuowdkip.css';

const viewBox = {"width":301,"height":261};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s3mdcff1x"/><path class="g72kchb_v"/><path class="xmuowdkip"/></g>`,
		"fallback": "cif:be",
	});
}

export default Component;
