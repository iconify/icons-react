import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df_472xle.css';
import '../../css/l/l3uet_-9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="df_472xle"/><path class="l3uet_-9z"/>`,
		"fallback": "lucide-extended:image-upscale-filled",
	});
}

export default Component;
