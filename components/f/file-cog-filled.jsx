import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4akmytgw.css';
import '../../css/u/uojfr4gpw.css';
import '../../css/r/rb_4au9oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4akmytgw"/><path clip-rule="evenodd" class="uojfr4gpw"/><path class="rb_4au9oc"/>`,
		"fallback": "lucide-extended:file-cog-filled",
	});
}

export default Component;
