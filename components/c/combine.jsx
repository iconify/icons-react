import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lk887tbfi.css';
import '../../css/t/td4pmbm2c.css';
import '../../css/g/gufd03s5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lk887tbfi"/><rect class="td4pmbm2c"/><rect class="gufd03s5p"/></g>`,
		"fallback": "lucide:combine",
	});
}

export default Component;
