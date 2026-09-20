import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvfzt0b4h.css';
import '../../css/v/v563b2fgo.css';
import '../../css/f/fqidyvhbf.css';
import '../../css/o/od5nzu7ef.css';
import '../../css/m/m5o8pl3_p.css';
import '../../css/z/zy21-oe9s.css';
import '../../css/p/p32tiv2ct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvfzt0b4h"/><path class="v563b2fgo"/><path class="fqidyvhbf"/><path class="od5nzu7ef"/><path class="m5o8pl3_p"/><path class="zy21-oe9s"/><path class="p32tiv2ct"/>`,
		"fallback": "selfhst:haproxy",
	});
}

export default Component;
