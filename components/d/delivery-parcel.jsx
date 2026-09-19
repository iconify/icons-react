import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjv214_sf.css';
import '../../css/j/j87t2qbsw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjv214_sf"/><path class="j87t2qbsw"/>`,
		"fallback": "carbon:delivery-parcel",
	});
}

export default Component;
