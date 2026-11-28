import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy29pc7fb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/szl-vpbku.css';
import '../../css/n/n1-nh8qnp.css';
import '../../css/g/g6flz5byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy29pc7fb secondary"/><g class="dt0cm9dhy primary"><path class="szl-vpbku"/><path class="n1-nh8qnp"/><path class="g6flz5byn"/></g>`,
		"fallback": "iconaut:image-duo",
	});
}

export default Component;
