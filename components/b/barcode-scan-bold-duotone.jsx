import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6s3x3npd.css';
import '../../css/x/x2u6flxpt.css';
import '../../css/n/ncu-jmblv.css';
import '../../css/p/pmz70xezp.css';
import '../../css/l/lxa0s2bjs.css';
import '../../css/n/n8akoezgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q6s3x3npd"/><path class="x2u6flxpt"/><path class="ncu-jmblv"/><path class="pmz70xezp"/><path class="lxa0s2bjs"/><path class="n8akoezgm"/></g>`,
		"fallback": "solar:barcode-scan-bold-duotone",
	});
}

export default Component;
