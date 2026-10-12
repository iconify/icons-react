import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw4bdbblf.css';
import '../../css/i/i2s-32vgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bw4bdbblf"/><path class="i2s-32vgw"/>`,
		"fallback": "lucide-extended:folder-key-filled",
	});
}

export default Component;
