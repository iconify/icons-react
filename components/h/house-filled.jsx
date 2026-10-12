import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajv8nnbbt.css';
import '../../css/y/y5rx7925u.css';
import '../../css/r/ri-2wptou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajv8nnbbt"/><path class="y5rx7925u"/><path class="ri-2wptou"/></g>`,
		"fallback": "andrsrxn:house-filled",
	});
}

export default Component;
