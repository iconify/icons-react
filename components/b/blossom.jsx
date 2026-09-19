import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q5-dt9q5a.css';
import '../../css/i/i_sac6b5d.css';
import '../../css/h/hlj6xxbjy.css';
import '../../css/q/qu92wmb6x.css';
import '../../css/o/o_kppqbvv.css';
import '../../css/h/he72pj5lo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="q5-dt9q5a"/><path class="i_sac6b5d"/><path class="hlj6xxbjy"/><path class="qu92wmb6x"/><path class="o_kppqbvv"/><path class="he72pj5lo"/></g>`,
		"fallback": "icon-park:blossom",
	});
}

export default Component;
