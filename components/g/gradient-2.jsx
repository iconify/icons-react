import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vynhotbwi.css';
import '../../css/h/huf4j3asl.css';
import '../../css/l/li4hmzbxv.css';
import '../../css/q/q-xerac6b.css';
import '../../css/v/vl67z84yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vynhotbwi"/><path class="huf4j3asl"/><path class="li4hmzbxv"/><path class="q-xerac6b"/><path class="vl67z84yn"/></g>`,
		"fallback": "streamline-ultimate:gradient-2",
	});
}

export default Component;
