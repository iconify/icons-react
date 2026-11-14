import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gxkg2nglx.css';
import '../../css/i/i20bt5bjj.css';
import '../../css/t/tqj-zy2in.css';
import '../../css/b/bm6komber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gxkg2nglx"/><path class="i20bt5bjj"/><path class="tqj-zy2in"/><path class="bm6komber"/></g>`,
		"fallback": "hugeicons:ai-vision-recognition",
	});
}

export default Component;
