import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb4svm1zh.css';
import '../../css/f/fcepc8bmd.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb4svm1zh"/><path class="fcepc8bmd"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-heart-filled",
	});
}

export default Component;
