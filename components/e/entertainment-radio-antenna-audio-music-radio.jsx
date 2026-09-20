import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z0h3k58cf.css';
import '../../css/q/qvuqlgb3f.css';
import '../../css/m/m3m9nrmce.css';
import '../../css/u/u0p7dbunz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="z0h3k58cf"/><path class="qvuqlgb3f"/><circle class="m3m9nrmce"/><path class="u0p7dbunz"/></g>`,
		"fallback": "streamline:entertainment-radio-antenna-audio-music-radio",
	});
}

export default Component;
