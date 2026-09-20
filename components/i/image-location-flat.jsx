import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vifru3bat.css';
import '../../css/k/kl7dgmbhv.css';
import '../../css/f/fk2z6voyg.css';
import '../../css/n/nqgr1cd4k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vifru3bat"/><path class="kl7dgmbhv"/><path class="fk2z6voyg"/><path class="nqgr1cd4k"/></g>`,
		"fallback": "streamline-flex-color:image-location-flat",
	});
}

export default Component;
