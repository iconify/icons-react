import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g25gybccv.css';
import '../../css/e/egh3d5cfd.css';
import '../../css/v/vvpeo-3dh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g25gybccv"/><path class="egh3d5cfd"/><path class="vvpeo-3dh"/>`,
		"fallback": "energy-icons:house-minus-20",
	});
}

export default Component;
