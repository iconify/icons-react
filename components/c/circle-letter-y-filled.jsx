import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj60v6byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zj60v6byq"/>`,
		"fallback": "lucide-extended:circle-letter-y-filled",
	});
}

export default Component;
