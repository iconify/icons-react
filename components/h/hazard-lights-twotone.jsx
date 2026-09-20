import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/p/phx94o.css';
import '../../css/e/eswpkb.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-z2xg2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew phx94o"/><path class="eswpkb iw1iew"/>`,
		"fallback": "line-md:hazard-lights-twotone",
	});
}

export default Component;
