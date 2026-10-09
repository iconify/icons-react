import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfpjugbvy.css';
import '../../css/z/z-tcgdc3x.css';
import '../../css/p/p_uvnbins.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfpjugbvy"/><path class="z-tcgdc3x"/><path class="p_uvnbins"/>`,
		"fallback": "energy-icons:house-plug-48-bold",
	});
}

export default Component;
