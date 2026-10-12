import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/s/s9pb3xbyq.css';
import '../../css/e/euj23wbcz.css';
import '../../css/r/revv96b-m.css';
import '../../css/n/nk73eqbvq.css';
import '../../css/s/sz42yuc2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="s9pb3xbyq"/><path class="euj23wbcz"/><path class="revv96b-m"/><path class="nk73eqbvq"/><path class="sz42yuc2v"/></g>`,
		"fallback": "lucide-extended:file-box-duotone",
	});
}

export default Component;
