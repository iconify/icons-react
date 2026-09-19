import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhy12_s6e.css';
import '../../css/o/o_rxuaclz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhy12_s6e"/><path class="o_rxuaclz"/>`,
		"fallback": "boxicons:institution-filled",
	});
}

export default Component;
