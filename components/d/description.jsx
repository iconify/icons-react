import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/sg7_6sbas.css';
import '../../css/k/knllnfbrf.css';
import '../../css/u/uqjbzxbre.css';
import '../../css/s/sfwi0ccjw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="sg7_6sbas"/><path class="knllnfbrf"/><path class="uqjbzxbre"/><path class="sfwi0ccjw"/></g>`,
		"fallback": "streamline-plump-color:description",
	});
}

export default Component;
