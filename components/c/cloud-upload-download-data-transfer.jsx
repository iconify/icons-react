import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sin-594nf.css';
import '../../css/k/kpxo4sbwd.css';
import '../../css/e/e2zns_z6f.css';
import '../../css/j/jobm8nbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sin-594nf"/><path class="kpxo4sbwd"/><path class="e2zns_z6f"/><path class="jobm8nbcu"/></g>`,
		"fallback": "streamline-cyber-color:cloud-upload-download-data-transfer",
	});
}

export default Component;
