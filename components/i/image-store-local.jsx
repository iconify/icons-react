import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xffjfs7fd.css';
import '../../css/l/ldwjonb-f.css';
import '../../css/q/q0e0esbtj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xffjfs7fd"/><path class="ldwjonb-f"/><path class="q0e0esbtj"/>`,
		"fallback": "carbon:image-store-local",
	});
}

export default Component;
