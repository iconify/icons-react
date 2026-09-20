import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnvucacag.css';
import '../../css/b/bh4frdbmf.css';
import '../../css/e/evzbml2ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnvucacag"/><path clip-rule="evenodd" class="bh4frdbmf"/><path class="evzbml2ma"/>`,
		"fallback": "solar:condicioner-outline",
	});
}

export default Component;
