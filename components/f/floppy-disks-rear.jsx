import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b70_v8m2q.css';
import '../../css/p/p1sjor0su.css';
import '../../css/w/wvbjc1o2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b70_v8m2q"/><circle class="p1sjor0su"/><path class="wvbjc1o2p"/></g>`,
		"fallback": "lucide-lab:floppy-disks-rear",
	});
}

export default Component;
