import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh9kd1bst.css';
import '../../css/a/a_z77pbhk.css';
import '../../css/i/im674ibsb.css';
import '../../css/m/mqax__jyy.css';
import '../../css/x/xfw_kddpp.css';
import '../../css/e/ei9e4ccpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh9kd1bst wm-shadow"/><path class="a_z77pbhk wm-k"/><path class="im674ibsb wm-k"/><path class="mqax__jyy wm-k"/><path class="wm-k xfw_kddpp"/><path class="ei9e4ccpl wm-shine"/>`,
		"fallback": "withicons-pastel:command",
	});
}

export default Component;
