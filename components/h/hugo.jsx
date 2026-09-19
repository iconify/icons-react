import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb3m88byk.css';
import '../../css/b/ba1fozbwm.css';
import '../../css/v/v3or5zb3r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb3m88byk"/><path class="ba1fozbwm"/><path class="v3or5zb3r"/>`,
		"fallback": "devicon:hugo",
	});
}

export default Component;
