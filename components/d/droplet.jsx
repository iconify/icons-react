import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgnr2fbse.css';
import '../../css/t/tb8_z-_kt.css';
import '../../css/t/tc079q59m.css';
import '../../css/f/feo9t0b0z.css';
import '../../css/v/vklf6pbkx.css';
import '../../css/o/othdmvbug.css';
import '../../css/s/sa0ph8boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow xgnr2fbse"/><path class="tb8_z-_kt wm-k"/><path class="tc079q59m wm-k"/><path class="feo9t0b0z wm-k"/><path class="vklf6pbkx wm-k"/><path class="othdmvbug wm-k"/><path class="sa0ph8boe wm-shine"/>`,
		"fallback": "withicons-pastel:droplet",
	});
}

export default Component;
