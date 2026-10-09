import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a23qezmoi.css';
import '../../css/h/hokkqjb4r.css';
import '../../css/d/dy4drqbor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a23qezmoi"/><path class="hokkqjb4r"/><path class="dy4drqbor"/>`,
		"fallback": "energy-icons:hydrogen-station-48",
	});
}

export default Component;
