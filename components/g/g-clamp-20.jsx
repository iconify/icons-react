import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tydjinbpb.css';
import '../../css/h/hhk5ccb2m.css';
import '../../css/v/v9vk_uvpw.css';
import '../../css/k/ks180r2vl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tydjinbpb"/><path class="hhk5ccb2m"/><path class="v9vk_uvpw"/><path class="ks180r2vl"/>`,
		"fallback": "energy-icons:g-clamp-20",
	});
}

export default Component;
