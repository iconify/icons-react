import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb4svm1zh.css';
import '../../css/s/s3-i80dqa.css';
import '../../css/k/ks00dfbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb4svm1zh"/><path class="s3-i80dqa"/><path class="ks00dfbiu"/>`,
		"fallback": "lucide-extended:file-heart-filled",
	});
}

export default Component;
