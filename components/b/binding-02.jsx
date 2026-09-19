import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq_plobvb.css';
import '../../css/x/xidavd7kn.css';
import '../../css/r/rfqd2w1ya.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq_plobvb"/><path class="xidavd7kn"/><path class="rfqd2w1ya"/>`,
		"fallback": "carbon:binding-02",
	});
}

export default Component;
