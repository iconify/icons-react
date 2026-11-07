import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io95umbud.css';
import '../../css/v/vr0cnhd_c.css';
import '../../css/d/dc6a51hpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io95umbud"/><path clip-rule="evenodd" class="vr0cnhd_c"/><path class="dc6a51hpk"/>`,
		"fallback": "solar:adhesive-plaster-bold",
	});
}

export default Component;
