import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euyzp-gep.css';
import '../../css/b/bwmhpx5xm.css';
import '../../css/s/snvw0ebyb.css';
import '../../css/b/bkw0kv8ec.css';
import '../../css/f/fidra7bil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euyzp-gep"/><path class="bwmhpx5xm"/><path class="snvw0ebyb"/><path class="bkw0kv8ec"/><path class="fidra7bil"/>`,
		"fallback": "fxemoji:fireworksparkler",
	});
}

export default Component;
