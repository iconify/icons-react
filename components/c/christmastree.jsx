import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaqtflmuv.css';
import '../../css/n/n8zqd8y2d.css';
import '../../css/g/gd0zbenas.css';
import '../../css/o/o95pry9_x.css';
import '../../css/p/pcfarkbfz.css';
import '../../css/n/ns2iggbgg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaqtflmuv"/><path class="n8zqd8y2d"/><path class="gd0zbenas"/><path class="o95pry9_x"/><path class="pcfarkbfz"/><path class="ns2iggbgg"/>`,
		"fallback": "fxemoji:christmastree",
	});
}

export default Component;
