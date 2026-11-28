import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqiz-dwfi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spokbjbne.css';
import '../../css/r/raewjx2vl.css';
import '../../css/c/cvitlkb7d.css';
import '../../css/m/mwrf1aclp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vqiz-dwfi"/><g class="dt0cm9dhy primary"><path class="spokbjbne"/><path class="raewjx2vl"/><path class="cvitlkb7d"/><path class="mwrf1aclp"/></g>`,
		"fallback": "iconaut:earth-duo",
	});
}

export default Component;
