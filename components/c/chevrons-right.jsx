import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjt35jbax.css';
import '../../css/y/yxau7pbyd.css';
import '../../css/r/rxw8qqb8r.css';
import '../../css/z/z1_2frnfd.css';
import '../../css/c/cnr0szbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow xjt35jbax"/><path class="wm-k yxau7pbyd"/><path class="rxw8qqb8r wm-k"/><path class="wm-a z1_2frnfd"/><path class="cnr0szbap wm-a"/>`,
		"fallback": "withicons-pastel:chevrons-right",
	});
}

export default Component;
