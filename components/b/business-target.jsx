import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/q/qnxfzvb7c.css';
import '../../css/i/im6tudb5i.css';
import '../../css/t/to_l31w7x.css';
import '../../css/z/z5_m0h1pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="qnxfzvb7c"/><path class="im6tudb5i"/><path class="to_l31w7x"/><path class="z5_m0h1pb"/></g>`,
		"fallback": "streamline-cyber:business-target",
	});
}

export default Component;
