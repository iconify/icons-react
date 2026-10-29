import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xspsugb5d.css';
import '../../css/r/re_sue-uy.css';
import '../../css/y/yi86fckoh.css';
import '../../css/b/bbluxmdcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k xspsugb5d"/><path class="re_sue-uy wm-k"/><path class="wm-a yi86fckoh"/><path class="bbluxmdcm wm-a"/>`,
		"fallback": "withicons-bauhaus:hospital",
	});
}

export default Component;
