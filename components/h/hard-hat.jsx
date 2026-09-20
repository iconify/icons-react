import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s2xk5-bxo.css';
import '../../css/k/k0wxbe_le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s2xk5-bxo"/><rect class="k0wxbe_le"/></g>`,
		"fallback": "lucide-lab:hard-hat",
	});
}

export default Component;
