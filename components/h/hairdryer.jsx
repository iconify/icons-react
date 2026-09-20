import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z9edi6b_u.css';
import '../../css/d/dxfwjcayj.css';
import '../../css/d/dvs2mni1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="z9edi6b_u"/><path class="dxfwjcayj"/><path class="dvs2mni1n"/></g>`,
		"fallback": "lucide-lab:hairdryer",
	});
}

export default Component;
