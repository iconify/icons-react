import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxomvab2t.css';
import '../../css/a/abbplybds.css';
import '../../css/e/eupxy9tmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxomvab2t"/><path class="abbplybds"/><path class="eupxy9tmv"/>`,
		"fallback": "lucide-extended:cloud-sync-filled",
	});
}

export default Component;
