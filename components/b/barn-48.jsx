import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj9xljt8w.css';
import '../../css/w/whkrpe4se.css';
import '../../css/x/x00dth-_f.css';
import '../../css/q/qkqutfb3d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj9xljt8w"/><path class="whkrpe4se"/><path class="x00dth-_f"/><path class="qkqutfb3d"/>`,
		"fallback": "energy-icons:barn-48",
	});
}

export default Component;
