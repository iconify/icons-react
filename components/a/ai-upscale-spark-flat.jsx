import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lbwnvfbkt.css';
import '../../css/j/jrt5-m2nc.css';
import '../../css/l/lyssfii6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lbwnvfbkt"/><path class="jrt5-m2nc"/><path class="lyssfii6o"/></g>`,
		"fallback": "streamline-sharp-color:ai-upscale-spark-flat",
	});
}

export default Component;
