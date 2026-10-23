import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hgtms_b6y.css';
import '../../css/r/r56i8-b2t.css';
import '../../css/t/tqhf4up4j.css';
import '../../css/t/tkq48kbjd.css';
import '../../css/l/lrlzf32rk.css';
import '../../css/m/m5eow0b0f.css';
import '../../css/g/ghmdthbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="hgtms_b6y"/><path class="r56i8-b2t"/><path class="tqhf4up4j"/><path class="tkq48kbjd"/><path class="lrlzf32rk"/><path class="m5eow0b0f"/><path class="ghmdthbty"/></g>`,
		"fallback": "matita:car",
	});
}

export default Component;
