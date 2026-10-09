import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqu5shbcg.css';
import '../../css/y/yis3i_jsr.css';
import '../../css/k/kv38rku_j.css';
import '../../css/k/kma9qvbyu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqu5shbcg"/><path class="yis3i_jsr"/><path class="kv38rku_j"/><path class="kma9qvbyu"/>`,
		"fallback": "energy-icons:api-key-48-bold",
	});
}

export default Component;
