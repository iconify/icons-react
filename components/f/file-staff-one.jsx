import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/smvgv0b2x.css';
import '../../css/w/w8qln35qt.css';
import '../../css/i/im-kzebzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="smvgv0b2x"/><circle class="w8qln35qt"/><path class="im-kzebzv"/></g>`,
		"fallback": "icon-park-solid:file-staff-one",
	});
}

export default Component;
