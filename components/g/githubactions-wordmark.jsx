import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbxmv5lgw.css';
import '../../css/l/lbz_afxlg.css';
import '../../css/g/gc5bzfbjb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbxmv5lgw"/><path class="lbz_afxlg"/><path class="gc5bzfbjb"/>`,
		"fallback": "devicon:githubactions-wordmark",
	});
}

export default Component;
