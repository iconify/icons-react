import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adkx26buk.css';
import '../../css/e/ex3oebbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="adkx26buk"/><path class="ex3oebbia"/>`,
		"fallback": "lucide-extended:hard-drive-filled",
	});
}

export default Component;
