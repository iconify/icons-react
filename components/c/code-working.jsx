import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgrlo48fn.css';
import '../../css/b/b-r1xf_2r.css';
import '../../css/x/x9trttupz.css';
import '../../css/s/si-h3sona.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fgrlo48fn"/><circle class="b-r1xf_2r"/><circle class="x9trttupz"/><path class="si-h3sona"/>`,
		"fallback": "ion:code-working",
	});
}

export default Component;
