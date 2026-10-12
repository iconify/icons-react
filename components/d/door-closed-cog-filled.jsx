import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/os0ja9bha.css';
import '../../css/c/clok_bfft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="os0ja9bha"/><path class="clok_bfft"/></g>`,
		"fallback": "lucide-extended:door-closed-cog-filled",
	});
}

export default Component;
