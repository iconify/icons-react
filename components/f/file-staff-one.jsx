import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/smvgv0b2x.css';
import '../../css/b/buqc3kb8r.css';
import '../../css/i/im-kzebzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="smvgv0b2x"/><circle class="buqc3kb8r"/><path class="im-kzebzv"/></g>`,
		"fallback": "icon-park-outline:file-staff-one",
	});
}

export default Component;
