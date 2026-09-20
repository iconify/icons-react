import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/j/jvs9gf.css';
import '../../css/l/l6j71m.css';
import '../../css/y/y4wbml.css';
import '../../css/h/hhvwim.css';
import '../../css/u/u4ckiv.css';
import '../../css/e/eexehd.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew jvs9gf"/><path class="iw1iew l6j71m y4wbml"/><path class="hhvwim iw1iew y4wbml"/><path class="iw1iew u4ckiv y4wbml"/><path class="eexehd iw1iew y4wbml"/>`,
		"fallback": "line-md:folder-zip-filled",
	});
}

export default Component;
