import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yjzybdkuw.css';
import '../../css/e/efohs445y.css';
import '../../css/s/su76dvw1u.css';
import '../../css/a/ang3hpb4r.css';
import '../../css/q/qrwfd8ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yjzybdkuw"/><path class="efohs445y wm-a"/><path class="su76dvw1u wm-shadow"/><path class="ang3hpb4r wm-k"/><path class="qrwfd8ber wm-a"/></g>`,
		"fallback": "withicons:golf-engrave",
	});
}

export default Component;
