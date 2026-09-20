import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/n/nd4s9c.css';
import '../../css/g/g_t0ty.css';
import '../../css/y/y4wbml.css';
import '../../css/v/v562ka.css';
import '../../css/z/zohreb.css';
import '../../css/x/xi0c9c.css';
import '../../css/d/d-6rhe.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew nd4s9c"/><path class="g_t0ty iw1iew y4wbml"/><path class="iw1iew v562ka y4wbml"/><path class="iw1iew y4wbml zohreb"/><path class="iw1iew xi0c9c y4wbml"/><path class="d-6rhe iw1iew y4wbml"/>`,
		"fallback": "line-md:brake-hold-twotone",
	});
}

export default Component;
