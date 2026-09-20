import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/t/tqo60u.css';
import '../../css/l/l6j71m.css';
import '../../css/y/y4wbml.css';
import '../../css/w/wpioji.css';
import '../../css/g/ggh1oi.css';
import '../../css/k/kcr6_t.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew tqo60u"/><path class="iw1iew l6j71m y4wbml"/><path class="iw1iew wpioji y4wbml"/><path class="ggh1oi iw1iew y4wbml"/><path class="iw1iew kcr6_t y4wbml"/>`,
		"fallback": "line-md:folder-zip-twotone",
	});
}

export default Component;
