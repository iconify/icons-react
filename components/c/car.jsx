import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i043-pphh.css';
import '../../css/s/s_wp055nf.css';
import '../../css/k/kdybz_aht.css';
import '../../css/x/xenr55hzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i043-pphh"/><circle class="s_wp055nf"/><path class="kdybz_aht"/><circle class="xenr55hzn"/></g>`,
		"fallback": "lucide:car",
	});
}

export default Component;
