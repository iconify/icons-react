import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag15_abea.css';
import '../../css/k/k3jegzb8r.css';
import '../../css/b/b0zjanbgx.css';
import '../../css/x/xqk69l56d.css';
import '../../css/d/d2z4wyw-h.css';

const viewBox = {"width":92.3,"height":132.3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag15_abea"/><path class="k3jegzb8r"/><path class="b0zjanbgx"/><path class="xqk69l56d"/><path class="d2z4wyw-h"/>`,
		"fallback": "thesvg-color:google-maps",
	});
}

export default Component;
