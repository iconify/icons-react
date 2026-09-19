import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s3l-wqo3v.css';
import '../../css/w/wywkoybsn.css';
import '../../css/k/khpz2vyvx.css';
import '../../css/e/eenddsb4b.css';
import '../../css/c/ce-0vbbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s3l-wqo3v"/><path class="wywkoybsn"/><path class="khpz2vyvx"/><path class="eenddsb4b"/><path class="ce-0vbbzv"/></g>`,
		"fallback": "gcp:cloud-interconnect",
	});
}

export default Component;
