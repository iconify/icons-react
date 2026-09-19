import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a4fel-blc.css';
import '../../css/h/hxl5el8-f.css';
import '../../css/o/oy-e8-1zv.css';
import '../../css/t/twh1bab_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="a4fel-blc"/><circle class="hxl5el8-f"/><circle class="oy-e8-1zv"/><path class="twh1bab_z"/></g>`,
		"fallback": "charm:git-fork",
	});
}

export default Component;
