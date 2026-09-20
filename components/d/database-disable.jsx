import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/efws-ccxq.css';
import '../../css/y/yymuc5b7f.css';
import '../../css/d/d9zjmy7gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="efws-ccxq"/><path class="yymuc5b7f"/><path class="d9zjmy7gh"/></g>`,
		"fallback": "streamline-ultimate:database-disable",
	});
}

export default Component;
