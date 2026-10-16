import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah576liuy.css';
import '../../css/d/d2zrzusbd.css';
import '../../css/y/yt1kjcbtq.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah576liuy"/><path class="d2zrzusbd"/><path class="yt1kjcbtq"/><path class="nq5_p_bzp"/>`,
		"fallback": "energy-icons:geothermal-plant-alert-20",
	});
}

export default Component;
