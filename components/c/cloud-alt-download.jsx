import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc2fcx.css';
import '../../css/j/jyt2ef.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-es1ygv.css';
import '../../css/d/d-wrh7yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc2fcx"/><path class="jyt2ef"/>`,
		"fallback": "line-md:cloud-alt-download",
	});
}

export default Component;
