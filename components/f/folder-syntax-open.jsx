import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixetddbeg.css';
import '../../css/z/z4tn2nb1x.css';
import '../../css/r/rysw60b-k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixetddbeg"/><path class="z4tn2nb1x"/><path class="rysw60b-k"/>`,
		"fallback": "material-icon-theme:folder-syntax-open",
	});
}

export default Component;
