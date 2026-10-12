import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xszn3n70c.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/w/w8kmi6bls.css';
import '../../css/y/ybl8sqh6q.css';
import '../../css/f/ffcftbauu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xszn3n70c"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="w8kmi6bls"/><path class="ybl8sqh6q"/><path class="ffcftbauu"/></g>`,
		"fallback": "lucide-extended:file-clock-duotone",
	});
}

export default Component;
