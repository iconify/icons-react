import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr69-xtna.css';
import '../../css/b/b775vy07j.css';
import '../../css/r/rf0x18blv.css';
import '../../css/q/qkzg-vbia.css';
import '../../css/p/pdqjmt76a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr69-xtna"/><path class="b775vy07j"/><path class="rf0x18blv"/><path class="qkzg-vbia"/><path class="pdqjmt76a"/>`,
		"fallback": "selfhst:ashim",
	});
}

export default Component;
