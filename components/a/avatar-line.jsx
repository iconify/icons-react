import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqc4vyb-j.css';
import '../../css/v/vpbu-db2v.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 zqc4vyb-j"/><path class="clr-i-outline clr-i-outline-path-2 vpbu-db2v"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:avatar-line",
	});
}

export default Component;
