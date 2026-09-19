import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbpxjcbvi.css';
import '../../css/g/gpd_jwbqe.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbpxjcbvi"/><path class="gpd_jwbqe"/>`,
		"fallback": "devicon:blender",
	});
}

export default Component;
