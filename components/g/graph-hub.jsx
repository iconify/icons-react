import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/w/w9-l4pzix.css';
import '../../css/z/zopjch_2q.css';
import '../../css/n/ny1qr-80o.css';
import '../../css/o/o80unubzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="tcwe4ewrv"/><circle class="w9-l4pzix"/><circle class="zopjch_2q"/><circle class="ny1qr-80o"/><path class="o80unubzf"/></g>`,
		"fallback": "lucide:graph-hub",
	});
}

export default Component;
