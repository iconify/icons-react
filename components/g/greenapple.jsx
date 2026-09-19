import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x18_efbzj.css';
import '../../css/a/aekx4xgvo.css';
import '../../css/w/wbjon1bki.css';
import '../../css/f/f_zhl5bzc.css';
import '../../css/z/z7zfk7b5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x18_efbzj"/><path class="aekx4xgvo"/><path class="wbjon1bki"/><path class="f_zhl5bzc"/><path class="z7zfk7b5g"/>`,
		"fallback": "fxemoji:greenapple",
	});
}

export default Component;
