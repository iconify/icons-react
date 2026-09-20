import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kre4sgfqt.css';
import '../../css/g/g6wanyb_h.css';
import '../../css/z/zdeqsb64h.css';
import '../../css/q/qa728ubcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kre4sgfqt"/><path class="g6wanyb_h"/><circle class="zdeqsb64h"/><path class="qa728ubcs"/></g>`,
		"fallback": "lucide:file-key-2",
	});
}

export default Component;
