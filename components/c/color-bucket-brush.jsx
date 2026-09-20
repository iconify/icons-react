import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iuftoqjtm.css';
import '../../css/f/fv3eeub9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iuftoqjtm"/><path class="fv3eeub9v"/></g>`,
		"fallback": "streamline-ultimate:color-bucket-brush",
	});
}

export default Component;
