import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qg-v6005a.css';
import '../../css/x/xtg3hkbfs.css';
import '../../css/i/i8_d-kclp.css';
import '../../css/g/gv9wppb4r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qg-v6005a"/><path class="xtg3hkbfs"/><path class="i8_d-kclp"/><path class="gv9wppb4r"/></g>`,
		"fallback": "marketeq:file-music-2",
	});
}

export default Component;
