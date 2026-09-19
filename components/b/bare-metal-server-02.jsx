import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfnz8351n.css';
import '../../css/y/y8mkib1ak.css';
import '../../css/r/rs7rz-b0d.css';
import '../../css/k/k43y_he5a.css';
import '../../css/u/uqvmiit-o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfnz8351n"/><circle class="y8mkib1ak"/><path class="rs7rz-b0d"/><circle class="k43y_he5a"/><path class="uqvmiit-o"/>`,
		"fallback": "carbon:bare-metal-server-02",
	});
}

export default Component;
