import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4akmytgw.css';
import '../../css/y/yg7brjbpd.css';
import '../../css/n/nq41ynbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4akmytgw"/><path clip-rule="evenodd" class="yg7brjbpd"/><path class="nq41ynbwe"/>`,
		"fallback": "lucide-extended:file-cog-filled",
	});
}

export default Component;
