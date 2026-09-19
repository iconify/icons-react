import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc-zz-dvu.css';
import '../../css/u/uh_772b6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc-zz-dvu"/><path class="uh_772b6s"/>`,
		"fallback": "carbon:ibm-z-os-containers",
	});
}

export default Component;
