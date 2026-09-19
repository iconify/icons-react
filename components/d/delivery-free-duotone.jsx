import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsd2o4b_k.css';
import '../../css/p/pchs25bqq.css';
import '../../css/j/jfy6s3bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xsd2o4b_k"/><path class="pchs25bqq"/><path class="jfy6s3bwq"/></g>`,
		"fallback": "iconamoon:delivery-free-duotone",
	});
}

export default Component;
