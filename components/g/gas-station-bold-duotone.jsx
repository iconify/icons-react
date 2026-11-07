import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x409kst0b.css';
import '../../css/g/gb32k036r.css';
import '../../css/y/ytqhmyb8m.css';
import '../../css/u/uocc4vb2z.css';
import '../../css/p/pid91x9vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x409kst0b"/><path class="gb32k036r"/><path class="ytqhmyb8m"/><path class="uocc4vb2z"/><path class="pid91x9vq"/>`,
		"fallback": "solar:gas-station-bold-duotone",
	});
}

export default Component;
