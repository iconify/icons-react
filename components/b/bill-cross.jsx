import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m528fvbyl.css';
import '../../css/d/d8g94_bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m528fvbyl"/><path class="d8g94_bnk"/></g>`,
		"fallback": "streamline-ultimate:bill-cross",
	});
}

export default Component;
