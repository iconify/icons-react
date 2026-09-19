import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zntd2nx3b.css';
import '../../css/n/n8ql_ybqa.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-solid clr-i-solid-path-1 zntd2nx3b"/><path class="clr-i-solid clr-i-solid-path-2 n8ql_ybqa"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:accessibility-2-solid",
	});
}

export default Component;
