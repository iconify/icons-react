import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hxl5el8-f.css';
import '../../css/o/oy-e8-1zv.css';
import '../../css/t/thgdu0bta.css';
import '../../css/t/tk1578ajx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="hxl5el8-f"/><circle class="oy-e8-1zv"/><circle class="thgdu0bta"/><path class="tk1578ajx"/></g>`,
		"fallback": "charm:git-branch",
	});
}

export default Component;
