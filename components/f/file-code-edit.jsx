import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtsccccab.css';
import '../../css/n/ny4lcvbjn.css';
import '../../css/f/fuw1m6-na.css';
import '../../css/p/p4vup8bmp.css';
import '../../css/q/qfssupjtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dtsccccab"/><path class="ny4lcvbjn"/><path class="fuw1m6-na"/><path class="p4vup8bmp"/><path class="qfssupjtn"/></g>`,
		"fallback": "streamline-ultimate-color:file-code-edit",
	});
}

export default Component;
