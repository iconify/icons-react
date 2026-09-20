import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/olrq7wj0g.css';
import '../../css/z/zj2c36nlr.css';
import '../../css/l/lhd9qz21x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="olrq7wj0g"/><path class="zj2c36nlr"/><path class="lhd9qz21x"/></g>`,
		"fallback": "streamline-ultimate:earthquake-global-seismic-wave",
	});
}

export default Component;
