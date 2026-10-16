import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb3dnqqxo.css';
import '../../css/c/cds46xnib.css';
import '../../css/n/nvw6mps9q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb3dnqqxo"/><path class="cds46xnib"/><path class="nvw6mps9q"/>`,
		"fallback": "energy-icons:clipboard-plus-20",
	});
}

export default Component;
