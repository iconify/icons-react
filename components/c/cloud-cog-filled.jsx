import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0j5jlbnz.css';
import '../../css/l/lhpluxdub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z0j5jlbnz"/><path class="lhpluxdub"/>`,
		"fallback": "lucide-extended:cloud-cog-filled",
	});
}

export default Component;
