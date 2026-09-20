import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv1yczbez.css';
import '../../css/e/enk161xfw.css';
import '../../css/t/trgl4klpj.css';
import '../../css/a/aj84m6bhf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv1yczbez"/><path class="enk161xfw"/><path class="trgl4klpj"/><path class="aj84m6bhf"/>`,
		"fallback": "thesvg-color:gazebo",
	});
}

export default Component;
