import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpmy4gbbe.css';
import '../../css/j/jvc_et25k.css';
import '../../css/o/omsosyx3j.css';
import '../../css/e/e1i4n8hvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpmy4gbbe wm-a"/><path class="jvc_et25k wm-k"/><path class="omsosyx3j wm-k"/><path class="e1i4n8hvz wm-a"/>`,
		"fallback": "withicons-bauhaus:headset",
	});
}

export default Component;
