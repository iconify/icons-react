import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/j/j3eacdoxs.css';
import '../../css/c/crigknl9d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="j3eacdoxs"/><path class="crigknl9d"/>`,
		"fallback": "energy-icons:cable-drum-48",
	});
}

export default Component;
