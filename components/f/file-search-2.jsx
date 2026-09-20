import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d-nkafbhy.css';
import '../../css/g/g6wanyb_h.css';
import '../../css/p/pzb87xb0u.css';
import '../../css/k/ka48d2b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d-nkafbhy"/><path class="g6wanyb_h"/><circle class="pzb87xb0u"/><path class="ka48d2b9k"/></g>`,
		"fallback": "lucide:file-search-2",
	});
}

export default Component;
