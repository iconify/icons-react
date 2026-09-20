import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvt9swbvw.css';
import '../../css/z/zzlsuxo-a.css';
import '../../css/f/fd5mkxbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fvt9swbvw"/><path class="zzlsuxo-a"/><path class="fd5mkxbsa"/>`,
		"fallback": "streamline-freehand:face-id-user",
	});
}

export default Component;
