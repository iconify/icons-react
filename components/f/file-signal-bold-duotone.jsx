import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/e/epxpc5bbp.css';
import '../../css/n/ng2t0it8x.css';
import '../../css/f/fmnpkbl0c.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="epxpc5bbp"/><path class="ng2t0it8x"/><path clip-rule="evenodd" class="fmnpkbl0c"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-signal-bold-duotone",
	});
}

export default Component;
