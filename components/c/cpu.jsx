import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mjfamlzye.css';
import '../../css/l/llpy5ldsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mjfamlzye"/><path class="llpy5ldsx"/></g>`,
		"fallback": "iconoir:cpu",
	});
}

export default Component;
