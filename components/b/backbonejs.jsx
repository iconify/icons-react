import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb3dx9ovg.css';
import '../../css/o/o68ncmbqz.css';
import '../../css/u/uw85bc0ix.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb3dx9ovg"/><path class="o68ncmbqz"/><path class="uw85bc0ix"/>`,
		"fallback": "devicon:backbonejs",
	});
}

export default Component;
