import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lr35t289o.css';
import '../../css/r/r51ldqbps.css';
import '../../css/h/hc9x5iblp.css';
import '../../css/i/i1i7m5bin.css';
import '../../css/o/omy7gacnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lr35t289o"/><path class="r51ldqbps"/><path class="hc9x5iblp"/><path class="i1i7m5bin"/><path class="omy7gacnf"/></g>`,
		"fallback": "streamline-ultimate-color:crypto-currency-bitcoin-lock",
	});
}

export default Component;
