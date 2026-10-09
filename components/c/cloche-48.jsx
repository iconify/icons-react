import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sow3prfxe.css';
import '../../css/c/c673ry-kp.css';
import '../../css/x/xfbl9fbkb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sow3prfxe"/><path class="c673ry-kp"/><path class="xfbl9fbkb"/>`,
		"fallback": "energy-icons:cloche-48",
	});
}

export default Component;
