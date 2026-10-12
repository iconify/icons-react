import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw4mfbbve.css';
import '../../css/i/iz0jpn4au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tw4mfbbve"/><path class="iz0jpn4au"/>`,
		"fallback": "lucide-extended:file-pen-line-filled",
	});
}

export default Component;
