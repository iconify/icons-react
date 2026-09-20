import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o4f6x2bln.css';
import '../../css/w/wu4khcc2o.css';
import '../../css/z/z_1tcd5no.css';
import '../../css/n/n70js04ud.css';
import '../../css/t/tlerxfq5c.css';
import '../../css/i/iu8gymcgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o4f6x2bln"/><path class="wu4khcc2o"/><path class="z_1tcd5no"/><path class="n70js04ud"/><path class="tlerxfq5c"/><path class="iu8gymcgs"/></g>`,
		"fallback": "tabler:brand-react-native",
	});
}

export default Component;
