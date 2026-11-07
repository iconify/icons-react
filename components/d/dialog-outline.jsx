import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eduva4b7t.css';
import '../../css/m/mnciwzbrt.css';
import '../../css/r/r79vqubxp.css';
import '../../css/s/sefx_kbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eduva4b7t"/><path class="mnciwzbrt"/><path class="r79vqubxp"/><path class="sefx_kbdz"/>`,
		"fallback": "solar:dialog-outline",
	});
}

export default Component;
