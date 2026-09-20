import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k7v6wxxvt.css';
import '../../css/e/e29_fccvd.css';
import '../../css/j/j7aezwb4v.css';
import '../../css/t/t4wdc2soy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k7v6wxxvt"/><path class="e29_fccvd"/><path class="j7aezwb4v"/><path class="t4wdc2soy"/></g>`,
		"fallback": "streamline-sharp-color:file-bookmark",
	});
}

export default Component;
