import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzaxycb1h.css';
import '../../css/w/wcn0uyb2b.css';
import '../../css/k/kl3kspb4p.css';
import '../../css/h/hu2xs9w1s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzaxycb1h"/><path class="wcn0uyb2b"/><path class="kl3kspb4p"/><path class="hu2xs9w1s"/>`,
		"fallback": "energy-icons:drill-press-20",
	});
}

export default Component;
