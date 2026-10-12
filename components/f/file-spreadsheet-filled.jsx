import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok1ry_uzj.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ok1ry_uzj"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-spreadsheet-filled",
	});
}

export default Component;
