import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atu2sub5i.css';
import '../../css/f/fwkrdacaj.css';
import '../../css/u/ujhpcdopf.css';
import '../../css/s/sf7c3hbxk.css';
import '../../css/d/dvjvyb1np.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atu2sub5i"/><path class="fwkrdacaj"/><path class="ujhpcdopf"/><path class="sf7c3hbxk"/><path class="dvjvyb1np"/>`,
		"fallback": "selfhst:automatic1111-light",
	});
}

export default Component;
