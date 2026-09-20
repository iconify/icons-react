import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vewg_bt9s.css';
import '../../css/e/esx638byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vewg_bt9s"/><path class="esx638byl"/></g>`,
		"fallback": "streamline-ultimate:go-backward-30-control",
	});
}

export default Component;
