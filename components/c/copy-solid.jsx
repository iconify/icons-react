import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_5tsvbed.css';
import '../../css/l/ls7yfwb3e.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 u_5tsvbed"/><rect class="clr-i-solid clr-i-solid-path-2 ls7yfwb3e"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:copy-solid",
	});
}

export default Component;
