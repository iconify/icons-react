import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2u71zzfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2u71zzfx"/>`,
		"fallback": "vadivam:file-plus",
	});
}

export default Component;
