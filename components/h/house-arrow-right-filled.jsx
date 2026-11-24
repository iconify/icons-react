import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbsonz3ob.css';
import '../../css/m/mtfo425qq.css';
import '../../css/v/vu0p8sbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbsonz3ob"/><path class="mtfo425qq"/><path class="vu0p8sbio"/>`,
		"fallback": "lucide-extended:house-arrow-right-filled",
	});
}

export default Component;
