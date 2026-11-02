import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vvtdlyypj.css';
import '../../css/b/b9ku26bot.css';
import '../../css/g/g8wgs-f4b.css';
import '../../css/k/kxy32bbbv.css';
import '../../css/h/hgla_v2aw.css';
import '../../css/s/szkdenbgy.css';
import '../../css/j/jzq2154oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="vvtdlyypj"/><path class="b9ku26bot"/><path class="g8wgs-f4b"/><path class="kxy32bbbv"/><path class="hgla_v2aw"/><path class="szkdenbgy"/><path class="jzq2154oi"/></g>`,
		"fallback": "matita:bacteria",
	});
}

export default Component;
