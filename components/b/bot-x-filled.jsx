import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp17bzlwb.css';
import '../../css/m/m9m_5-b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp17bzlwb"/><path clip-rule="evenodd" class="m9m_5-b5j"/>`,
		"fallback": "lucide-extended:bot-x-filled",
	});
}

export default Component;
