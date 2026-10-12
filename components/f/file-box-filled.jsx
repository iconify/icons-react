import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy37fwx1z.css';
import '../../css/a/aqrtcbb7a.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qy37fwx1z"/><path class="aqrtcbb7a"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-box-filled",
	});
}

export default Component;
