import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjyjkeb1p.css';
import '../../css/z/z_eux7ten.css';
import '../../css/n/nhkxgacuy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="yjyjkeb1p"/><circle class="z_eux7ten"/><path class="nhkxgacuy"/></g>`,
		"fallback": "charm:id",
	});
}

export default Component;
