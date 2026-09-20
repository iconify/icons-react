import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is9eh2bmt.css';
import '../../css/k/ki7ftx34p.css';
import '../../css/r/rjh5ftb2x.css';
import '../../css/x/xr9mtabdg.css';
import '../../css/d/daf01ho3r.css';
import '../../css/j/jvvrpwbxo.css';
import '../../css/r/rpio0dblx.css';
import '../../css/j/jenx8nycs.css';
import '../../css/h/hxdq8bczz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is9eh2bmt"/><path class="ki7ftx34p"/><path class="rjh5ftb2x"/><path class="xr9mtabdg"/><path class="daf01ho3r"/><path class="jvvrpwbxo"/><path class="rpio0dblx"/><path class="jenx8nycs"/><path class="hxdq8bczz"/>`,
		"fallback": "streamline-emojis:dog",
	});
}

export default Component;
