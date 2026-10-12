import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifilj8bay.css';
import '../../css/v/vw71kgb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifilj8bay"/><path clip-rule="evenodd" class="vw71kgb2l"/>`,
		"fallback": "lucide-extended:badge-russian-ruble-filled",
	});
}

export default Component;
