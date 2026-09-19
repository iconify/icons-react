import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b5k2o3wfc.css';
import '../../css/a/amx419yok.css';
import '../../css/a/asllu_tlg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b5k2o3wfc"/><path class="amx419yok"/><path class="asllu_tlg"/></g>`,
		"fallback": "glyphs:boxing-glove",
	});
}

export default Component;
