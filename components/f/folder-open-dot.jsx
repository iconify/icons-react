import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h0xfx4kqq.css';
import '../../css/a/al5f-39iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h0xfx4kqq"/><circle class="al5f-39iz"/></g>`,
		"fallback": "lucide:folder-open-dot",
	});
}

export default Component;
