import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b92_qzb7s.css';
import '../../css/z/ziql97jnu.css';
import '../../css/l/lm_ci3bft.css';
import '../../css/m/m7d5a_bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b92_qzb7s"/><path class="ziql97jnu"/><path class="lm_ci3bft"/><path class="m7d5a_bvd"/></g>`,
		"fallback": "lucide:folder-sync",
	});
}

export default Component;
