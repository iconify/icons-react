import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg_sfhb4g.css';
import '../../css/v/vw_qo7apa.css';
import '../../css/b/bsihc0byt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg_sfhb4g"/><path class="vw_qo7apa"/><path class="bsihc0byt"/>`,
		"fallback": "energy-icons:certificate-20",
	});
}

export default Component;
