import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/a/a828rf6ok.css';
import '../../css/n/ns6b357aj.css';
import '../../css/z/z4mmbd6lv.css';
import '../../css/l/l6qk5ab5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="a828rf6ok"/><path class="ns6b357aj"/><path class="z4mmbd6lv"/><path class="l6qk5ab5k"/></g>`,
		"fallback": "streamline-sharp-color:ai-generate-voice-spark-2",
	});
}

export default Component;
