import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s2lghyb2l.css';
import '../../css/l/ls30h7cmn.css';
import '../../css/g/g3pw3npno.css';
import '../../css/x/xl3fa-blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="s2lghyb2l"/><path class="ls30h7cmn"/><path class="g3pw3npno"/><path class="xl3fa-blb"/></g>`,
		"fallback": "streamline-logos:apple-ios-logo-2",
	});
}

export default Component;
