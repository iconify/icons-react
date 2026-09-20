import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vzfeypbmp.css';
import '../../css/y/ykq_xkq5b.css';
import '../../css/r/ruuzqpbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vzfeypbmp"/><path class="ykq_xkq5b"/><path class="ruuzqpbee"/></g>`,
		"fallback": "streamline-ultimate:dentistry-tooth-jaws",
	});
}

export default Component;
