import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sj9ov6bfp.css';
import '../../css/a/ac6zzfbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sj9ov6bfp"/><path class="ac6zzfbep"/></g>`,
		"fallback": "streamline-ultimate:cloud-data-transfer",
	});
}

export default Component;
