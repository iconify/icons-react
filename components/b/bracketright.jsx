import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzlup_paf.css';

const viewBox = {"width":168,"height":954};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzlup_paf"/>`,
		"fallback": "ls:bracketright",
	});
}

export default Component;
